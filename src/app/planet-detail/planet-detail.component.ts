import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSerializer } from '@angular/router';
import { Location } from '@angular/common';

import { Planet }         from '../planet';
import { PlanetsService }  from '../planets.service';


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})

export class PlanetDetailComponent implements OnInit {

  planet: any;
  planetImg: string;

  constructor(
    private planetsService: PlanetsService,
    private urlSerializer: UrlSerializer,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    this.planetsService.getPlanets(name)
        .subscribe(data => {
          data.forEach(planet => {
            if (planet.name === name) {
              this.planet = planet;
              this.planetImg = this.urlSerializer.parse(planet.name);
            }
          });
        });
  }

  goBack(): void {
    this.location.back();
  }

}
