import { PrestationI } from "../interfaces/prestation-i";
import { State } from "../enums/state.enum";

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number = 0;
  tjmHt: number = 0;
  tauxTva: number = 20;
  state: State = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTTC(tva?: number): number {
    if (!tva) {
      return this.totalHt() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + tva / 100);
  }
}
