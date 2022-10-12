import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { IndiceComponent } from './components/indice/indice.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'indice', component: IndiceComponent},
  {path: '', redirectTo: '/indice', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
