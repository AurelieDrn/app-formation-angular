import { Component, Input, OnInit } from "@angular/core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
  public faTrashAlt = faTrashAlt;
  constructor(private ps: PrestationService) {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then(data => {
      // response api
      // this.item = data;
      this.item.state = state;
    });
  }

  delete() {
    this.ps.delete(this.item).then(data => {
      // traitement response api
    });
  }
}
