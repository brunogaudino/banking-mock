import { Component, OnInit } from '@angular/core';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-contraction',
  templateUrl: './contraction.component.html',
  styleUrls: ['./contraction.component.css']
})
export class ContractionComponent implements OnInit {

  objPublicTitles: Object = {};

  constructor(
    private reduxService: ReduxService,
    private router: Router
  ) { }

  ngOnInit() {
    this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
  }

  clickContractTitle(titleCode: number){
    this.router.navigate(['/investments/direct-treasure/confirmation', titleCode]);
  }

}
