import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Character } from '../characters';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any[];

  constructor(private charactersService: CharactersService) {

  }

  ngOnInit() {
    this.charactersService.getCharacters()
        .subscribe(data => {          
          this.characters = data;
          console.table(this.characters);
        });
  }

  onSelect(planet) {
    console.log("Selected Character", this.characters[character]);
  }

}
