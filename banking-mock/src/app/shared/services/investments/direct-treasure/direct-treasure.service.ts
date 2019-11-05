import { Injectable } from '@angular/core';
import { ListDirectTreasureMock } from 'src/app/investments/direct-treasure/mocks/list-direct-treasure.mock';

@Injectable({
  providedIn: 'root'
})
export class DirectTreasureService {

  constructor() { }

  getPublicTitles(){
    console.log('getPublidTitlesService ', ListDirectTreasureMock);
    return ListDirectTreasureMock;
  }

}
