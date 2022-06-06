import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListWeaponsComponent } from './components/list-weapons/list-weapons.component';
import { ListAgentsComponent } from './components/list-agents/list-agents.component';
import { ListMapsComponent } from './components/list-maps/list-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWeaponsComponent,
    ListAgentsComponent,
    ListMapsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
