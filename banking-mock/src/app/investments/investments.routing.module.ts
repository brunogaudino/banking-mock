import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentsComponent } from './investments.component';
import { DirectTreasureComponent } from './direct-treasure/direct-treasure.component';
import { ContractionComponent } from './direct-treasure/contraction/contraction.component';
import { ConfirmationComponent } from './direct-treasure/confirmation/confirmation.component';
import { ReceiptComponent } from './direct-treasure/receipt/receipt.component';

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
  },
  {
    path: 'direct-treasure/confirmation/:titleCode',
    component: ConfirmationComponent  
  },
  {
    path: 'direct-treasure/receipt',
    component: ReceiptComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvestmentsRoutingModule { }
