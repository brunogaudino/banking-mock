import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  objDataShare: any;

  constructor() { }

  getObjDataShare(){
    return this.objDataShare;
  }

  setObjDataShare(objDataShare){
    this.objDataShare = objDataShare;
  }

}
