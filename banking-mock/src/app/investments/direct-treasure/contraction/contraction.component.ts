import { Component, OnInit } from '@angular/core';

import { ReduxService } from 'src/app/shared/services/redux.service';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/shared/services/data-share.service';

@Component({
  selector: 'bm-contraction',
  templateUrl: './contraction.component.html',
  styleUrls: ['./contraction.component.css']
})
export class ContractionComponent implements OnInit {

  objPublicTitles: Object = {};
  objDataShare: object;

  constructor(
    private reduxService: ReduxService,
    private router: Router,
    private dataShareService: DataShareService
  ) { }

  ngOnInit() {
    //this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
    this.objPublicTitles = this.dataShareService.getObjDataShare();
    //console.log('Contration do service sahred ', this.objPublicTitles);
  }

  clickContractTitle(titleCode: number){
    this.router.navigate(['/investments/direct-treasure/confirmation', titleCode]);
  }

}
