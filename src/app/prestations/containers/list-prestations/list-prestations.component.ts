import { Component, OnInit } from "@angular/core";
import { PrestationService } from "../../services/prestation.service";
import { Prestation } from "src/app/shared/models/prestation";

@Component({
  selector: "app-list-prestations",
  templateUrl: "./list-prestations.component.html",
  styleUrls: ["./list-prestations.component.scss"],
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];

  constructor(private ps: PrestationService) {}

  ngOnInit() {
    this.collection = this.ps.collection;
  }
}
