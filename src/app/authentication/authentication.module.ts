import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { AuthenticationComponent } from '../authentication.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignComponent,
    PasswordrecoveryComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
