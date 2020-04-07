import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { players } from 'src/app/players';

@Component({
  selector: 'app-assemble',
  templateUrl: './assemble.component.html',
  styleUrls: ['./assemble.component.scss']
})
export class AssembleComponent implements OnInit {

  closeResult = '';
  playerList = players;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(AddPlayerComponent);
  }
}
