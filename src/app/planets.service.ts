import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Planet } from './planet';

@Injectable()
export class PlanetsService {

  url = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) {

  }

  getPlanets() : Observable<Planet[]> {
    return this.http.get<Planet[]>(this.url)
               .map(data => data.results);
  }
}
