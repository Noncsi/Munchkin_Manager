import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { players } from 'src/app/players';
import { Player } from 'src/app/datamodels/player';
import { Sex } from 'src/app/datamodels/sex.enum';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  playerForm;

  constructor(public activeModalService: NgbActiveModal) {
    this.playerForm = new FormGroup({
      name: new FormControl(),
      sex: new FormControl(),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(result) {
    players.push(new Player(result.name, Sex[result.sex as keyof typeof Sex]));
    console.log("New player was added");
    this.activeModalService.close();
    this.playerForm.reset();
    console.log(players)
  }
}
