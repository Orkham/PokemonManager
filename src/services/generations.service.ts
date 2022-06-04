import { Injectable } from '@angular/core';
import {Generation} from "../app/models/Generation";

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  private _generations : Generation[];

  get generations(): Generation[] {
    return this._generations;
  }

  set generations(value: Generation[]) {
    this._generations = value;
  }

  constructor() {
    this._generations = [
      new Generation("I"),
      new Generation("II"),
      new Generation("III"),
      new Generation("IV"),
      new Generation("V"),
      new Generation("VI"),
      new Generation("VII"),

    ]
  }
}
