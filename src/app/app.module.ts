import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PublicityComponent } from './components/publicity/publicity.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    PublicityComponent,
    StatisticsComponent,
    DashboardComponent,
    
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthenticationRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

