import { ClientState } from '../reducers/client.reducer';

export interface AppState {
  readonly client: ClientState
}