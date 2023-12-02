import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { Passwordrecovery2Component } from './passwordrecovery2/passwordrecovery2.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { registrocompradorComponent } from './registrocomprador/registrocomprador.component';
import { registrovendedorComponent } from './registrovendedor/registrovendedor.component';
import {UserService} from "../service/user.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    LoginComponent,
    PasswordrecoveryComponent,
    Passwordrecovery2Component,
    AuthenticationComponent,
    RegistroComponent,
    registrocompradorComponent,
    registrovendedorComponent
  ],

  providers: [UserService],

  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthenticationModule { }
