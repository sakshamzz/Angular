import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {
  pokemonName : string = 'Bulbasaur'
  pokemonNames = {};
  randomColor : string = this.getRandomColor()
  count : number = 1
  constructor() {
   }

  ngOnInit(): void {
    
  }

  onChangeNameClick(name:string)
  {
    this.pokemonName = name
  }

  onResetClick(event: any) {
    console.log(event)
    this.pokemonName = ""
  }

  onAddClick()
  {
    
    this.pokemonNames["3"] = this.pokemonName;
    this.randomColor = this.getRandomColor()
  }

  onRemovePokemon()
  {
    this.pokemonNames.pop();
  }

   getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
