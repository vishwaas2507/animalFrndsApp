import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsRoutingModule } from './clients.routing.module';
import { ClientsComponent } from './containers/clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ClientDetailWrapperComponent } from './containers/client-detail/client-detail-wrapper.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ 
    ClientsComponent,
    ClientDetailWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClientsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ]
})
export class ClientsModule { }
