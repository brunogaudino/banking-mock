import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { ListDirectTreasureMock } from 'src/app/investments/direct-treasure/mocks/list-direct-treasure.mock';
import { IDirectTreasure } from 'src/app/shared/interfaces/direct-treasure.interface';

@Injectable({
  providedIn: 'root'
})
export class DirectTreasureService {

  private apiUrl = 'http://localhost:3199/listdata';

  constructor(
    private http: HttpClient
  ) { }

  getPublicTitlesMock(){
    return ListDirectTreasureMock;
  }

  getApiUrl(): Observable<IDirectTreasure[]>{
    try {
      return this.http.get<IDirectTreasure[]>(this.apiUrl);      
    } catch (error) {
      console.log('Catch error getApiUrl service ', error);
    }
  }

}
