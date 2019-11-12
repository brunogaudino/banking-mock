import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { ListDirectTreasureMock } from 'src/app/investments/direct-treasure/mocks/list-direct-treasure.mock';
import { IDirectTreasure } from 'src/app/shared/interfaces/direct-treasure.interface';
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DirectTreasureService {

  constructor(
    private http: HttpClient
  ) { }

  getPublicTitlesMock(){
    return ListDirectTreasureMock;
  }

  getPublicTitles(): Observable<IDirectTreasure[]>{
    try {
      return this.http.get<IDirectTreasure[]>(environment.apiUrlDirectTreasure);      
    } catch (error) {
      console.log('Error catched getPublicTitles service ', error);
    }
  }

  getPublicTitlesParam(idParam: number): Observable<IDirectTreasure[]> {
    try {
      return this.http.get<IDirectTreasure[]>(environment.apiUrlDirectTreasure + idParam);      
    } catch (error) {
      console.log('Error catched getPublicTitlesParam service ', error);
    }

  }

  getPublicTitleContration(idParam: number): Observable<IDirectTreasure[]> {
    try {
      return this.http.get<IDirectTreasure[]>(environment.apiUrlDirectTreasure + idParam);       
    } catch (error) {
      console.log('Error catched getPublicTitleContration service ', error);
    }

  }

}
