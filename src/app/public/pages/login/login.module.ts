import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginNewhereComponent } from '../../components/login-newhere/login-newhere.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginNewhereComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class LoginModule { }
