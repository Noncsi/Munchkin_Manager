import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/datamodels/player';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player : Player
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  select() {
    console.log(this.player._name);
    const modalRef = this.modalService.open(EditPlayerComponent);
    modalRef.componentInstance.selectedPlayer = this.player;
  }
}
