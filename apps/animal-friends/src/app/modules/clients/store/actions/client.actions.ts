
import { Action } from '@ngrx/store';
import { PaginationItem, ClientItem } from '../models/client-item.model';

export enum ClientActionTypes {
  LOAD_CLIENT = '[CLIENT] Load Client',
  LOAD_CLIENT_SUCCESS = '[CLIENT] Load Client Success',
  LOAD_CLIENT_FAILURE = '[CLIENT] Load Client Failure'
}

export class LoadClientAction implements Action {
  readonly type = ClientActionTypes.LOAD_CLIENT
  constructor(public payload: PaginationItem) { }
}
export class LoadClientSuccessAction implements Action {
  readonly type = ClientActionTypes.LOAD_CLIENT_SUCCESS

  constructor(public payload: Array<any>) {}

}
export class LoadClientFailureAction implements Action {
  readonly type = ClientActionTypes.LOAD_CLIENT_FAILURE
  
  constructor(public payload: string) {}
}

export type ClientAction =
  LoadClientAction |
  LoadClientFailureAction |
  LoadClientSuccessAction
