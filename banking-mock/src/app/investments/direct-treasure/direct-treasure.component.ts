import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { DirectTreasureService } from 'src/app/shared/services/investments/direct-treasure/direct-treasure.service';
import { IDirectTreasureState } from '../../store/state/direct-treasure.state';
import { PUBLIC_TITLE_DIRECT_TREASURE } from 'src/app/store/actions/direct-treasure.actions';
import { DataShareService } from 'src/app/shared/services/data-share.service';

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
  objDataShare: object;

  constructor(
    private directTreasureService: DirectTreasureService,
    private router: Router,
    private reduxService: ReduxService,
    private dataShareService: DataShareService
  ) { }

  ngOnInit() {

    this.directTreasureService.getPublicTitles().subscribe(
      response => {
        this.setObjectPublicTitles(response);
      },
      error => console.log('Error ', error)
    );
  
  }

  setObjectPublicTitles(response){
    this.objPublicTitles = response;
    console.log('setObjectPublicTitles ', this.objPublicTitles);
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

    //this.reduxService.setRedux(PUBLIC_TITLE_DIRECT_TREASURE, payload);
    this.dataShareService.setObjDataShare(payload);
    this.router.navigate(['/investments/direct-treasure/contraction', titleCode]);
  }

  getPublicTitle(objPublicTitles, titleCode){
    const response = objPublicTitles.filter(publicTitle => (publicTitle.titleCode == titleCode));
    return response;
  }

}
