import { Component, OnInit } from '@angular/core';

import { ReduxService } from 'src/app/shared/services/redux.service';

@Component({
  selector: 'app-contraction',
  templateUrl: './contraction.component.html',
  styleUrls: ['./contraction.component.css']
})
export class ContractionComponent implements OnInit {

  objPublicTitles: Object = {};
  registerSubscription: any;

  constructor(
    private reduxService: ReduxService
  ) { }

  ngOnInit() {
    this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
  }

}
