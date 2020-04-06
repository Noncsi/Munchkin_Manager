import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AssembleComponent } from './components/assemble/assemble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssembleComponent,
    PlayerComponent,
    AddPlayerComponent
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
