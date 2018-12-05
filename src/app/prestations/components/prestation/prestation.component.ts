import { Component, Input, OnInit } from "@angular/core";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";
import { PrestationService } from "../../services/prestation.service";

@Component({
  selector: "app-prestation",
  templateUrl: "./prestation.component.html",
  styleUrls: ["./prestation.component.scss"],
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  // public states = State;
  public states = Object.values(State);
  constructor(private ps: PrestationService) {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }
}
