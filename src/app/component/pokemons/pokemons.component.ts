import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {PokemonsService} from "../../../services/pokemons.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  get pokemonsInBase(): number {
    return this._pokemonsInBase;
  }

  set pokemonsInBase(value: number) {
    this._pokemonsInBase = value;
  }

  private _pokemons: Pokemon[];
  private _pokemonsInBase: number;

  constructor(private srv: PokemonsService) {
    this._pokemons = srv.pokemons;
    this._pokemonsInBase = srv.getNumberOfPokemonsInList();
  }

  ngOnInit(): void {
  }


  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set pokemons(value: Pokemon[]) {
    this._pokemons = value;
  }


  public imgPokemon(id: number): any {
    let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";

    return (img);
  }
}
