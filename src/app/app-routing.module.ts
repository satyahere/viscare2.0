import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './modules/user/user.component';
import {RegistrationSuccessComponent} from './modules/user/registration-success/registration-success.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path : 'success',  component : RegistrationSuccessComponent},
  {path : '', redirectTo: '/user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
