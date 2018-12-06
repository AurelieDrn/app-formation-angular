import { Component, OnInit } from "@angular/core";
import { LinksI } from "src/app/shared/interfaces/links-i";

@Component({
  selector: "app-page-prestations",
  templateUrl: "./page-prestations.component.html",
  styleUrls: ["./page-prestations.component.scss"],
})
export class PagePrestationsComponent implements OnInit {
  public items: LinksI[];

  constructor() {}

  ngOnInit() {
    this.items = [
      { route: "detail", label: "Détails" },
      { route: "comment", label: "Comments" },
    ];
  }
}
