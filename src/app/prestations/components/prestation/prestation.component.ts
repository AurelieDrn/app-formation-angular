import { Component, Input, OnInit } from "@angular/core";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

@Component({
  selector: "app-prestation",
  templateUrl: "./prestation.component.html",
  styleUrls: ["./prestation.component.scss"],
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  // public states = State;
  public states = Object.values(State);
  constructor() {}

  ngOnInit() {}
}
