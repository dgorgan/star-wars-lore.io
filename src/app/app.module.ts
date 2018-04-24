import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetsService } from './planets.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { CharactersService } from './characters.service';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planets', component: PlanetsComponent }
  { path: 'planets/:name', component: PlanetDetailComponent },
  { path: 'characters', component: CharactersComponent }
  { path: 'characters/:name', component: CharacterDetailComponent }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    HomeComponent,
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PlanetsService, CharactersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
