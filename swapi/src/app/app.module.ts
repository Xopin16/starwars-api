import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportModule } from './material-imports/material-imports.module';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IndiceComponent } from './components/indice/indice.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    PlanetsComponent,
    StarshipsComponent,
    PageNotFoundComponent,
    IndiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
