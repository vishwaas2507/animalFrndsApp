import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state.model';

@Component({
  selector: 'anml-client-detail-wrapper',
  templateUrl: './client-detail-wrapper.component.html',
  styleUrls: ['./client-detail-wrapper.component.scss']
})
export class ClientDetailWrapperComponent {

  clientInfo: any;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<AppState>) { 
    this.activatedRoute.params.subscribe((params: any) => {
      this.store.select(store => store.client.list).subscribe((list: any)=> {
        this.clientInfo = list.filter((item: any)=> item.login.uuid === params.uuid)[0];
      });
    });
  }

  navigateTo(path: string){
    this.router.navigate([path]);
  }

}
