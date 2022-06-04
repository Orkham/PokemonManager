import { Injectable } from '@angular/core';
import { Pokemon } from '../app/models/Pokemon';
import {Generation} from "../app/models/Generation";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private _pokemons : Pokemon[];

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set pokemons(value: Pokemon[]) {
    this._pokemons = value;
  }

  constructor() {
    this._pokemons = [
      new Pokemon(1, "Bulbizarre", ["Plante", "Poison"], 70, 6.9, "graine", new Generation("I")),
      new Pokemon(2, "Florizarre", ["Plante", "Poison"], 100, 13,"graine", new Generation("I")),
      new Pokemon(3, "Herbizarre", ["Plante", "Poison"], 200, 100,"graine", new Generation("I")),
      new Pokemon(4, "Salamèche", ["Feu"], 60, 8.5, "lézard", new Generation("I")),
      new Pokemon(5, "Reptincel", ["Feu"], 110, 19,"flamme", new Generation("I")),
      new Pokemon(6, "Dracaufeu", ["Feu", "Vol"], 170, 90.5,"flamme", new Generation("I"))
    ]
  }

public getNumberOfPokemonsInList(): number {
    return this.pokemons.length;
}



}
