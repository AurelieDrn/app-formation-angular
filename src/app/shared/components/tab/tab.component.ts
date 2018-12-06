import { Component, OnInit, Input } from "@angular/core";
import { LinksI } from "../../interfaces/links-i";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent implements OnInit {
  @Input() items: LinksI[];

  constructor() {}

  ngOnInit() {}
}
