import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailWrapperComponent } from './containers/client-detail/client-detail-wrapper.component';
import { ClientsComponent } from './containers/clients/clients.component';

// export const routes: Routes = [
//   {
//     path: 'users', component: UsersComponent, children: [
//       { path: ':userId', component: DetailsComponent },
//       { path: '**', component: PlaceholderComponent }
//     ]
//   },
//   { path: '**', redirectTo: '/users' }
// ];

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: ':uuid',
    component: ClientDetailWrapperComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
