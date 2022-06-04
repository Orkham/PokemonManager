export class Generation{
  private _generation : string;

  constructor(generation: string) {
    this._generation = "Génération " + generation;
    /*
    private id : number;
    private numero : number;
    private pokemons : Pokemon[];
     */
  }

  get generation(): string {
    return this._generation;
  }

  set generation(value: string) {
    this._generation = value;
  }
}
