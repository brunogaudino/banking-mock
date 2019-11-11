import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IDirectTreasure } from '../interfaces/direct-treasure.interface';
import { IDirectTreasureState } from 'src/app/store/state/direct-treasure.state';
import { PUBLIC_TITLE_DIRECT_TREASURE } from 'src/app/store/actions/direct-treasure.actions';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {

  registerSubscription: any;
  returnState: any;

  constructor(
    private store: Store<IDirectTreasureState>
  ) { }

  getRedux(): Observable<IDirectTreasureState>{
    this.registerSubscription = this.store.subscribe(
      (state: IDirectTreasureState) => {
        this.returnState = state['publicTitleReducer'];
    })
    return this.returnState;
  }
  
  setRedux(payload): Observable<IDirectTreasureState>{
    this.store.dispatch({ type: PUBLIC_TITLE_DIRECT_TREASURE, payload });
    return payload;
  }

}
