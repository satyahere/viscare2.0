import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from './modules/user/user.module';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationSuccessComponent } from './modules/user/registration-success/registration-success.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
