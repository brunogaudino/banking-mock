import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'bm-card-public-titles',
  templateUrl: './card-public-titles.component.html',
  styleUrls: ['./card-public-titles.component.css']
})
export class CardPublicTitlesComponent implements OnInit {
  
  constUrl = environment.apiUrlDirectTreasure;
  
  //Variables
  @Input() titleCode;
  @Input() titleType: string;
  @Input() description: string;
  @Input() expiry: Date;
  @Input() rate: number;
  @Input() value: number;
  @Input() descriptionIndex: string;
  @Input() codeIndex: number;
  @Input() percentIndex: number;
  @Output() emitApplyClickTitle = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickApplyTitle(){
    this.emitApplyClickTitle.emit(this.titleCode);
  }

}
