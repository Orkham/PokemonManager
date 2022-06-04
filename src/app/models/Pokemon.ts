import {Generation} from "./Generation";

export class Pokemon{
  private _id: number;
  private _name: string;
  private _type : string[];/*enum à faire*/
  private _size: number;
  private _weight: number;
  private _category: string;
  private generation: Generation;/*à enlever et utiliiser le setter*/



  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string[] {
    return this._type;
  }

  set type(value: string[]) {
    this._type = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }


  constructor(id: number, name: string, type: string[], size: number, weight: number, category: string, generation: Generation) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._size = size;
    this._weight = weight;
    this._category = category;
    this.generation = generation;
  }
}
