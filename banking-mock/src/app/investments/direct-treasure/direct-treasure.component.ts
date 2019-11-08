import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DirectTreasureService } from 'src/app/shared/services/investments/direct-treasure/direct-treasure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-direct-treasure',
  templateUrl: './direct-treasure.component.html',
  styleUrls: ['./direct-treasure.component.css']
})
export class DirectTreasureComponent implements OnInit {
  titleCode: number;
  objPublicTitles: Object;
  
  constructor(
    private directTreasureService: DirectTreasureService,
    private router: Router
  ) { }

  ngOnInit() {

    this.directTreasureService.getPublicTitles().subscribe(
      response => {
        this.objPublicTitles = response;
      },
      error => console.log('Error ', error)
    );
  
  }

  applyClickTitle(titleCode){
    this.router.navigate(['/investments/direct-treasure/contraction', titleCode]);
  }

}
