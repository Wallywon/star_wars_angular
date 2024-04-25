import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { PlanetesComponent } from './planetes/planetes';
import { PeopleComponent } from './people/people';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PlanetesComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
    HttpClientModule,
    CommonModule,AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
