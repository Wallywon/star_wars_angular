import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetesComponent } from './planetes/planetes';
import { PeopleComponent } from './people/people';

export const routes: Routes = [
  { path: '', component: PlanetesComponent },
  { path: 'people/:id', component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
