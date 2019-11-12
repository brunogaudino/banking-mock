import { Component, OnInit } from '@angular/core';

import { ReduxService } from 'src/app/shared/services/redux.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  objPublicTitles: Object = {};

  constructor(
    private reduxService: ReduxService
  ) { }

  ngOnInit() {
    this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
  }

}
