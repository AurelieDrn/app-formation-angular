import { Component, OnInit, OnDestroy } from "@angular/core";
import { LinksI } from "src/app/shared/interfaces/links-i";
import { ActivatedRoute, Data } from "@angular/router";
import { Subscription, Observable } from "rxjs";
import { pluck } from "rxjs/operators";

@Component({
  selector: "app-page-prestations",
  templateUrl: "./page-prestations.component.html",
  styleUrls: ["./page-prestations.component.scss"],
})
export class PagePrestationsComponent implements OnInit {
  public items: LinksI[];
  // public title: string;
  public title$: Observable<String>;
  // private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.items = [
      { route: "detail", label: "Détails" },
      { route: "comment", label: "Comments" },
    ];
    this.title$ = this.activatedRoute.data.pipe(pluck("title"));
    /* this.sub = this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
    }); */
  }

  /* ngOnDestroy(): void {
    this.sub.unsubscribe();
  } */
}
