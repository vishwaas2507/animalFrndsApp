import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Client, ClientResult } from '../models/client.model';
import { LoadClientAction } from '../store/actions/client.actions';
import { AppState } from '../store/models/app-state.model';
import { PaginationItem } from '../store/models/client-item.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://randomuser.me/api/';

  constructor(private http: HttpClient, private store: Store<AppState>) { }
  
  getClients(pagination: PaginationItem): Observable<any> {
    return this.http
      .get<any>(
      `${this.API_BASE_URL}?results=${pagination.resultPerPage}&page=${pagination.pageNumber}`
      )
      .pipe(map(result => {
        return result.results;
      }));
  }
}