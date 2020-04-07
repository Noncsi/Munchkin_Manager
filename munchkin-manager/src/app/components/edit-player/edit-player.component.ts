import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { players } from 'src/app/players';
import { Player } from 'src/app/datamodels/player';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  @Input() selectedPlayer;
  editPlayerForm;

  constructor(public activeModalService: NgbActiveModal) {
    this.editPlayerForm = new FormGroup({
      level: new FormControl(),
      strength: new FormControl(),
      sex: new FormControl(),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(result) {
    var editedPlayer = players.find(({_name}) => _name === this.selectedPlayer._name);
    editedPlayer._level = result.level;
    editedPlayer._strength = result.strength;
    editedPlayer._sex = result.sex;
    this.activeModalService.close();
    this.editPlayerForm.reset();
    console.log(players)
  }
}
