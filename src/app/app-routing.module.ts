import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PublicityComponent } from './components/publicity/publicity.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignComponent } from './authentication/sign/sign.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "publicity",
    component: PublicityComponent
  },
  {
   
    path: "auth", 
    component: AuthenticationComponent,
    children:[
      {
        path: 'sign', 
        component: SignComponent
      },

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
export class AppRoutingModule { }
export const routingComponents={
                                LoginComponent,
                                SignComponent
                               }