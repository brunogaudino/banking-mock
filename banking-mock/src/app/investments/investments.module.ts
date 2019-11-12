import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments.routing.module';
import { DirectTreasureComponent } from './direct-treasure/direct-treasure.component';
import { InvestmentsComponent } from './investments.component';
import { CardPublicTitlesComponent } from '../shared/components/card-public-titles/card-public-titles.component';
import { ContractionComponent } from './direct-treasure/contraction/contraction.component';
import { ConfirmationComponent } from './direct-treasure/confirmation/confirmation.component';
import { ReceiptComponent } from './direct-treasure/receipt/receipt.component';

@NgModule({
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ],
  declarations: [
    InvestmentsComponent,
    DirectTreasureComponent,
    ConfirmationComponent,
    CardPublicTitlesComponent,
    ContractionComponent,
    ReceiptComponent
  ],
  exports: [

  ],
  providers: []
})
export class InvestmentsModule { }