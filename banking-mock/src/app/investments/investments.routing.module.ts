import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectTreasureComponent } from './direct-treasure/direct-treasure.component';
import { InvestmentsComponent } from './investments.component';
import { ContractionComponent } from './direct-treasure/contraction/contraction.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentsComponent
  },
  {
    path: 'direct-treasure',
    component: DirectTreasureComponent
  },
  {
    path: 'direct-treasure/contraction/:titleCode',
    component: ContractionComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvestmentsRoutingModule { }
