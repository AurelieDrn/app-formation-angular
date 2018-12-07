import { Component, Input, OnInit } from "@angular/core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";
import { PrestationService } from "../../services/prestation.service";
import { Router } from "@angular/router";

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
  public faEdit = faEdit;

  constructor(private ps: PrestationService, private router: Router) {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then(data => {
      // response api
      // this.item = data;
      this.item.state = state;
    });

    // this.ps.update(this.item, state).subscribe(data => {
    //  this.item.state = state;
    // });
  }

  delete() {
    this.ps.delete(this.item).then(data => {
      // traitement response api
    });
    // this.ps.delete(this.item).subscribe(data => {
    // traitement response api
    // });
  }

  edit() {
    this.router.navigate([`prestations/edit/${this.item.id}`]);
  }

  public getDetail() {
    this.ps.presta$.next(this.item);
    console.log(this.ps.presta$);
  }
}
