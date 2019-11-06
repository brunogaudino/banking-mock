import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bm-card-public-titles',
  templateUrl: './card-public-titles.component.html',
  styleUrls: ['./card-public-titles.component.css']
})
export class CardPublicTitlesComponent implements OnInit {
  //Variables
  @Input() titleCode: number;
  @Input() titleType: string;
  @Input() description: string;
  @Input() expiry: Date;
  @Input() rate: number;
  @Input() value: number;
  @Input() descriptionIndex: string;
  @Input() codeIndex: number;
  @Input() percentIndex: number;

  constructor() { }

  ngOnInit() {

  }

}
