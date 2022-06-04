import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenerationsComponent } from './component/generations/generations.component';
import { PokemonsComponent } from './component/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
