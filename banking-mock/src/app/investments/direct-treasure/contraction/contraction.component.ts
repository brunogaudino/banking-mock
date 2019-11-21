import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { DataShareService } from 'src/app/shared/services/data-share.service';
import { Observable } from 'rxjs';
import { IDirectTreasure } from 'src/app/shared/interfaces/direct-treasure.interface';

@Component({
  selector: 'bm-contraction',
  templateUrl: './contraction.component.html',
  styleUrls: ['./contraction.component.css']
})
export class ContractionComponent implements OnInit {

  objPublicTitles: IDirectTreasure;
  //objDataShare: object;
  //stateValue: any;
  @ViewChild('valueToApply', {static: false}) valueToApply : ElementRef;
  @ViewChild('titlePart', {static: false}) titlePart : ElementRef;
  
  constructor(
    private reduxService: ReduxService,
    private router: Router,
    private dataShareService: DataShareService,
    private nativeElement: ElementRef
  ) { }

  ngOnInit() {
    //this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
    this.objPublicTitles = this.dataShareService.getObjDataShare();
  }

  clickContractTitle(titleCode: number){
    this.objPublicTitles.stateCurrentApplyValue = this.valueToApply.nativeElement.value;
    this.objPublicTitles.stateTitlePart  = this.titlePart.nativeElement.value;
    this.router.navigate(['/investments/direct-treasure/confirmation', titleCode]);
  }

  valueChange(objPublicTitlesValue){
    if (this.valueToApply.nativeElement.value == 0) {
      this.valueToApply.nativeElement.value = 30;
    }
    const valueResult = objPublicTitlesValue / (this.titlePart.nativeElement.value);
    this.valueToApply.nativeElement.value = valueResult;
  }

}

/*
Needs implement the application simulation in the input value apply
------Add-----
yields - create a json list
value - input in app
repeatly month - input in app
minimal value - input in app
*/