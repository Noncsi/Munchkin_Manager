import { Component, OnInit } from '@angular/core';

import { players } from 'src/app/players';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  playerList = players;
  
  constructor() { }

  ngOnInit(): void {
  }
}
