import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { State } from "../enums/state.enum";

@Directive({
  selector: "[appState]",
})
export class StateDirective implements OnInit, OnChanges {
  @Input() appState: State;
  // attribut class de td sur lequel on a appliqué la directive
  @HostBinding("class") nomClass: string;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.nomClass = this.formatClass(this.appState);
  }

  // Option => state-option
  // Annulé => state-annule
  // Confrmé => state-confirme
  // En attente => state-enattente
  private formatClass(state: State): string {
    return `state-${state
      .normalize("NFD")
      .replace(/[\u0300-\u036f\s]/g, "")
      .toLocaleLowerCase()}`;
  }
}
