import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { RegistroComponent } from './registro/registro.component';
import { registrocompradorComponent } from './registrocomprador/registrocomprador.component';
import { registrovendedorComponent } from './registrovendedor/registrovendedor.component';

const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent
  },
  {
    path: 'sign', 
    component: SignComponent
  },
  {
    path: 'passwordrecovery', 
    component: PasswordrecoveryComponent,
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



