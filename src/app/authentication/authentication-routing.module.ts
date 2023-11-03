import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';


const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'sign', component: SignComponent
      },
      {
        path: 'passwordrecovery', component: PasswordrecoveryComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
