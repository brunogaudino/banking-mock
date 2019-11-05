import { Component, OnInit } from '@angular/core';
import { DirectTreasureService } from 'src/app/shared/services/investments/direct-treasure/direct-treasure.service';

@Component({
  selector: 'bm-direct-treasure',
  templateUrl: './direct-treasure.component.html',
  styleUrls: ['./direct-treasure.component.css']
})
export class DirectTreasureComponent implements OnInit {

  objPublicTitles: Object = this.directTreasureService.getPublicTitles();

  constructor(
    private directTreasureService: DirectTreasureService
  ) { }

  ngOnInit() {
    console.log('obj public titles ', this.objPublicTitles);
  }

}
