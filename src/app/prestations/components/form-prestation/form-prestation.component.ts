import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

@Component({
  selector: "app-form-prestation",
  templateUrl: "./form-prestation.component.html",
  styleUrls: ["./form-prestation.component.scss"],
})
export class FormPrestationComponent implements OnInit {
  public states = Object.values(State);
  public init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onSubmit(): void {
    // Envoie un flux de données à nItem
    this.nItem.emit(this.init);
  }
}
