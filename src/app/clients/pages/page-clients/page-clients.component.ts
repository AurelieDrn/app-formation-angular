import { Component, OnInit } from "@angular/core";
import { LinksI } from "src/app/shared/interfaces/links-i";

@Component({
  selector: "app-page-clients",
  templateUrl: "./page-clients.component.html",
  styleUrls: ["./page-clients.component.scss"],
})
export class PageClientsComponent implements OnInit {
  public items: LinksI[];

  constructor() {}

  ngOnInit() {
    this.items = [
      { route: "detail", label: "Détails" },
      { route: "comment", label: "Comments" },
    ];
  }
}
