import { Component, OnInit, OnDestroy } from "@angular/core";
import { LinksI } from "src/app/shared/interfaces/links-i";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-page-clients",
  templateUrl: "./page-clients.component.html",
  styleUrls: ["./page-clients.component.scss"],
})
export class PageClientsComponent implements OnInit, OnDestroy {
  public items: LinksI[];
  public title: string;
  private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.items = [
      { route: "detail", label: "Détails" },
      { route: "comment", label: "Comments" },
    ];
    this.sub = this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
