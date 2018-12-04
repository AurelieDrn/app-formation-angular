import { Component, OnInit } from "@angular/core";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public faBars = faBars;
  public faTimes = faTimes;
  public faUser = faUser;
  public title: string;
  public open = true;

  constructor() {}

  ngOnInit() {
    this.title = "mon titre";
  }
}
