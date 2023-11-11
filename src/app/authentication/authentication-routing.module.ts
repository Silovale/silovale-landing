import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { Passwordrecovery2Component } from './passwordrecovery2/passwordrecovery2.component';
import { RegistroComponent } from './registro/registro.component';
import { registrocompradorComponent } from './registrocomprador/registrocomprador.component';
import { registrovendedorComponent } from './registrovendedor/registrovendedor.component';

const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent
  },
  {
    path: 'passwordrecovery', 
    component: PasswordrecoveryComponent,
  },
  {
    path: 'passwordrecovery2', 
    component: Passwordrecovery2Component,
  },
  {
    path: 'registro', 
    component: RegistroComponent,
  },
  {
    path: 'registrocomprador', 
    component: registrocompradorComponent,
  },
  {
    path: 'registrovendedor', 
    component: registrovendedorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }



