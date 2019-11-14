import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IDirectTreasureState } from 'src/app/store/state/direct-treasure.state';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {

  registerSubscription: any;
  returnState: any;

  constructor(
    private store: Store<IDirectTreasureState>
  ) { }

  getRedux(reducerName: string): Observable<IDirectTreasureState>{

    this.registerSubscription = this.store.subscribe(
      (state: IDirectTreasureState) => {
        this.returnState = state[reducerName];
    }).unsubscribe();

    return this.returnState;
  }
  
  setRedux(action: string, objReduxData: object ){
    this.store.dispatch({ type: action, payload: objReduxData });
  }

}
