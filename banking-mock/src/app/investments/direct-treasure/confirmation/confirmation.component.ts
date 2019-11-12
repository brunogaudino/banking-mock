import { Component, OnInit } from '@angular/core';
import { ReduxService } from 'src/app/shared/services/redux.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  objPublicTitles: Object = {};

  constructor(
    private reduxService: ReduxService,
    private router: Router
  ) { }

  ngOnInit() {
    this.objPublicTitles = this.reduxService.getRedux('publicTitleReducer');
  }

  clickConfirmationTitle(titleCode: number){
    this.router.navigate(['/investments/direct-treasure/receipt', titleCode]);
  }

}
