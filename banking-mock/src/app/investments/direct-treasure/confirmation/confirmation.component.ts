import { Component, OnInit } from '@angular/core';
import { ReduxService } from 'src/app/shared/services/redux.service';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/shared/services/data-share.service';

@Component({
  selector: 'bm-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

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
    //console.log('Confirmation do service sahred ', this.objPublicTitles);
  }

  clickConfirmationTitle(titleCode: number){
    this.router.navigate(['/investments/direct-treasure/receipt', titleCode]);
  }

}
