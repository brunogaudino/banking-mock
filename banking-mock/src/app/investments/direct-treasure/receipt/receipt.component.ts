import { Component, OnInit, OnDestroy } from '@angular/core';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { DataShareService } from 'src/app/shared/services/data-share.service';
import { IDirectTreasure } from 'src/app/shared/interfaces/direct-treasure.interface';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit, OnDestroy {
  
  objPublicTitles: IDirectTreasure;
  objDataShare: object;

  constructor(
    private reduxService: ReduxService,
    private dataShareService: DataShareService
  ) { }

  ngOnInit() {
    //this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
    this.objPublicTitles = this.dataShareService.getObjDataShare();
    //console.log('Confirmation do service sahred ', this.objPublicTitles);

  }
  
  ngOnDestroy() {
    this.objPublicTitles;
  }

}
