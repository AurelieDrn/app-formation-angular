import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Prestation } from "src/app/shared/models/prestation";
import { PrestationService } from "../../services/prestation.service";

@Component({
  selector: "app-edit-prestation",
  templateUrl: "./edit-prestation.component.html",
  styleUrls: ["./edit-prestation.component.scss"],
})
export class EditPrestationComponent implements OnInit {
  public prestation: Prestation;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: PrestationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { item: Prestation }) => {
      this.prestation = data.item;
      console.log(this.prestation);
    });
  }

  public update(item: Prestation) {
    item.id = this.prestation.id;
    this.ps.update(item).then(data => {
      // traitement response api
      this.router.navigate(["prestations"]);
    });
  }
}
