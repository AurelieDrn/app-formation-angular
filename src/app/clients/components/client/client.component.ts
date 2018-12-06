import { Component, Input, OnInit } from "@angular/core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { StateClient } from "src/app/shared/enums/state-client.enum";
import { Client } from "src/app/shared/models/client";
import { ClientService } from "../../services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  @Input() item: Client;
  // public states = State;
  public states = Object.values(StateClient);
  public faTrashAlt = faTrashAlt;

  constructor(private clientService: ClientService) {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.clientService.update(this.item, state);
  }

  delete() {
    this.clientService.delete(this.item).then(data => {
      // traitement response api
    });
  }
}
