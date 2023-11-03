import { NgModule } from '@angular/core';
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
        path: 'sign', component: SignComponent
      },
      {
        path: 'passwordrecovery', component: PasswordrecoveryComponent,
      }
    ]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }



