import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { DataShareService } from 'src/app/shared/services/data-share.service';

@Component({
  selector: 'bm-contraction',
  templateUrl: './contraction.component.html',
  styleUrls: ['./contraction.component.css']
})
export class ContractionComponent implements OnInit {

  objPublicTitles: Object = {};
  objDataShare: object;
  @ViewChild('valueToApply', {static: false}) valueToApply : ElementRef;

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
    console.log('Click contract title ', this.valueToApply.nativeElement.value);
    //this.router.navigate(['/investments/direct-treasure/confirmation', titleCode]);
  }

  focusOut(){
    console.log('Call simulation and validation service');
    console.log('FOCUS OUT ', this.valueToApply.nativeElement.value);
  }
}

/*
Needs implement the application simulation in the input value apply

------Add-----
yields - create a json list
value - input in app
minimal value - input in app
repeatly month - input in app
*/