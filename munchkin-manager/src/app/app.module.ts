import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AssembleComponent } from './components/assemble/assemble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { GameComponent } from './components/game/game.component';
import { PlayerComponent } from './components/player/player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssembleComponent,
    AddPlayerComponent,
    GameComponent,
    PlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    AddPlayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
