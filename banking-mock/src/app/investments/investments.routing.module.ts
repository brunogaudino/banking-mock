import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectTreasureComponent } from './direct-treasure/direct-treasure.component';
import { InvestmentsComponent } from './investments.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentsComponent
  },
  {
    path: 'direct-treasure',
    component: DirectTreasureComponent
    //loadChildren: './direct-treasure/direct-treasure.module#DirectTreasureModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvestmentsRoutingModule { }
