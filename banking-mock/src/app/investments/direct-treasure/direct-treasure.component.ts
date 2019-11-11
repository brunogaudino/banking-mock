import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { DirectTreasureService } from 'src/app/shared/services/investments/direct-treasure/direct-treasure.service';
import { IDirectTreasureState } from '../../store/state/direct-treasure.state';

@Component({
  selector: 'bm-direct-treasure',
  templateUrl: './direct-treasure.component.html',
  styleUrls: ['./direct-treasure.component.css']
})
export class DirectTreasureComponent implements OnInit {
  objPublicTitles: Object;
  titleCode: number;
  codeIndex: number;
  description: string;
  descriptionIndex: any;
  expiry: any;
  percentIndex: number; 
  rate: number;
  titleType: string;
  value: number;
  registerSubscription: any;

  constructor(
    private directTreasureService: DirectTreasureService,
    private router: Router,
    private reduxService: ReduxService
  ) { }

  ngOnInit() {

    this.directTreasureService.getPublicTitles().subscribe(
      response => {
        this.objPublicTitles = response;
      },
      error => console.log('Error ', error)
    );
  
  }

  applyClickTitle(titleCode){
    const publicTitle = this.getPublicTitle(this.objPublicTitles, titleCode)
    const payload: IDirectTreasureState = {
      stateCodeIndex: publicTitle[0].codeIndex,
      stateDescription: publicTitle[0].description,
      stateDescriptionIndex: publicTitle[0].descriptionIndex,
      stateExpiry: publicTitle[0].expiry,
      statePercentIndex: publicTitle[0].percentIndex,
      stateRate: publicTitle[0].rate,
      stateTitleCode: publicTitle[0].titleCode,
      stateTitleType: publicTitle[0].titleType,
      stateValue: publicTitle[0].value
    }
    this.reduxService.setRedux(payload);
    this.router.navigate(['/investments/direct-treasure/contraction', titleCode]);
  }

  getPublicTitle(objPublicTitles, titleCode){
    const response = objPublicTitles.filter(publicTitle => (publicTitle.titleCode == titleCode));
    return response;
  }

}
