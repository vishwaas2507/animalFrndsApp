import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of} from 'rxjs';
import { LoadClientAction } from '../../store/actions/client.actions';
import { AppState } from '../../store/models/app-state.model';
import { PaginationItem } from '../../store/models/client-item.model';

@Component({
  selector: 'anml-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Observable<Array<any>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  totalPages: number = 4;
  currentPage: number = 1;
  pages: Array<number> = [1,2,3,4];

  constructor(
    private router: Router,
    private store: Store<AppState>) {
      this.clients = this.store.select(store => store.client.list);
      this.loading$ = this.store.select(store => store.client.loading);
      this.error$ = this.store.select(store => store.client.error);
  }

  ngOnInit() {
    let payload: PaginationItem = new PaginationItem({resultPerPage: 20, pageNumber: 1});
    this.store.dispatch(new LoadClientAction(payload));
  }

  search(event: any): void {
    let searchText = event.target.value;
    this.store.select(store => store.client.list).pipe(
      map((result: any)=> result),
    ).subscribe(data=>{
      this.clients = of(data.filter((val: any)=> val.name.first.toLowerCase().includes(searchText.toLowerCase()) ||
            val.name.last.toLowerCase().includes(searchText.toLowerCase()) ||
            val.gender.toLowerCase().includes(searchText.toLowerCase()) ||
            val.email.toLowerCase().includes(searchText.toLowerCase()) ||
            val.location.street.number.toString().toLowerCase().includes(searchText.toLowerCase()) ||
            val.location.street.name.toLowerCase().includes(searchText.toLowerCase()) ||
            val.location.postcode.toString().toLowerCase().includes(searchText.toLowerCase()) ||
            val.location.city.toLowerCase().includes(searchText.toLowerCase()) ||
            val.location.state.toLowerCase().includes(searchText.toLowerCase()) ||
            val.location.country.toLowerCase().includes(searchText.toLowerCase())));
    });
  }

  selectRow(clientInfo: any){
    this.router.navigate(['/clients/'+ clientInfo.login.uuid], { state: clientInfo });
  }
}