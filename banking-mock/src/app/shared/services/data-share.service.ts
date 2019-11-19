import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  objPublicTitles: any;

  constructor() { }

  getObjDataShare(){
    return this.objPublicTitles;
  }

  setObjDataShare(objPublicTitles){
    this.objPublicTitles = objPublicTitles;
  }

}
