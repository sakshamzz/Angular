import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {
  pokemonName : string = 'Bulbasaur'
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
}
