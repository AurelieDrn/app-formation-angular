import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

@Component({
  selector: "app-form-reactive-prestation",
  templateUrl: "./form-reactive-prestation.component.html",
  styleUrls: ["./form-reactive-prestation.component.scss"],
})
export class FormReactivePrestationComponent implements OnInit {
  public states = Object.values(State);
  public init = new Prestation();
  public form: FormGroup;

  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tauxTva: [this.init.tauxTva],
      state: [this.init.state],
    });
  }

  public onSubmit(): void {
    // console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }

  public isError(nfc: string): boolean {
    return this.form.get(nfc).invalid && this.form.get(nfc).touched;
  }
}
