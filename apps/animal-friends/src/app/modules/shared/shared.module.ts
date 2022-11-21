import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

@NgModule({
  declarations: [
    ClientDetailComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    ClientListComponent,
    ClientDetailComponent,
  ]
})
export class SharedModule { }
