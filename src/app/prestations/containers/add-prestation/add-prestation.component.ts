import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Prestation } from "src/app/shared/models/prestation";
import { PrestationService } from "../../services/prestation.service";

@Component({
  selector: "app-add-prestation",
  templateUrl: "./add-prestation.component.html",
  styleUrls: ["./add-prestation.component.scss"],
})
export class AddPrestationComponent implements OnInit {
  constructor(
    private ps: PrestationService,
    private router: Router,
    private ar: ActivatedRoute,
  ) {}

  ngOnInit() {}

  public add(item: Prestation) {
    this.ps.add(item).then(data => {
      // traitement response api
      this.router.navigate(["prestations"]);
    });
    // Router relative
    // this.router.navigate(["../", {relativeTo: this.ar}]);
  }
}
