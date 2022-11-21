import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { LoadClientAction, ClientActionTypes, LoadClientSuccessAction, LoadClientFailureAction} from '../actions/client.actions'
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';

@Injectable()
export class ClientEffects {

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) { }

  loadClient$: Observable<any> = createEffect(() => {
    return this.actions$
      .pipe(
        ofType<LoadClientAction>(ClientActionTypes.LOAD_CLIENT),
        switchMap(data => {
          return this.dataService.getClients(data.payload).pipe(
            map(i => new LoadClientSuccessAction(i)),
            catchError(error => of(new LoadClientFailureAction(error)))
          );
        })
      );
  });

}