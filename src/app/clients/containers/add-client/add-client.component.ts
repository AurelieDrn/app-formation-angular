import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  constructor(
    private cs: ClientService,
    private router: Router,
    private ar: ActivatedRoute,
  ) {}

  ngOnInit() {}

  public add(item: Client) {
    this.cs.add(item).then(data => {
      // traitement response api
      this.router.navigate(["clients"]);
    });
  }
}
