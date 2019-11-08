import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DirectTreasureService } from 'src/app/shared/services/investments/direct-treasure/direct-treasure.service';

@Component({
  selector: 'app-contraction',
  templateUrl: './contraction.component.html',
  styleUrls: ['./contraction.component.css']
})
export class ContractionComponent implements OnInit {

  objPublicTitles: Object = {};

  constructor(
    private directTreasureService: DirectTreasureService,
    private routerParam: ActivatedRoute  
  ) { }

  ngOnInit() {

    this.routerParam.params.subscribe(
      params => this.getUrlParam(params['titleCode']),
      error => console.log('Error ', error)
    );

  }
      
  getUrlParam(urlParam){

    this.directTreasureService.getPublicTitlesParam(urlParam).subscribe(
      response => {
        response.map(data => {
          this.objPublicTitles = data;
        })
        console.log('RESPONSE ', this.objPublicTitles);
      },
      error => console.log('Error ', error)
    )

  }

}
