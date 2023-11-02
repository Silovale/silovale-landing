import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignComponent,
    PasswordrecoveryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
