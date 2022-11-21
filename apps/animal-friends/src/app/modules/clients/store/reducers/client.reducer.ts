import { ClientActionTypes, ClientAction } from '../actions/client.actions';
import { ClientItem } from '../models/client-item.model';

export interface ClientState {
  list: ClientItem[],
  loading: boolean,
  error: any;
}


const initialState: ClientState = {
  list: [],
  loading: false,
  error: undefined
};

export function ClientReducer(state: ClientState = initialState, action: any) {
  switch (action.type) {
    case ClientActionTypes.LOAD_CLIENT:
      return {
        ...state,
        loading: true
      }
    case ClientActionTypes.LOAD_CLIENT_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    
    case ClientActionTypes.LOAD_CLIENT_FAILURE: 
      return {
        ...state,
        error: action.payload
      }
    
    default:
      return state;
  }
}