import { Injectable } from "@angular/core";
import { StateClient } from "src/app/shared/enums/state-client.enum";
import { Client } from "src/app/shared/models/client";
import { fakeClients } from "./fake-clients";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private _collection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  // get collection
  public get collection(): Client[] {
    return this._collection;
  }
  // set collection
  public set collection(col: Client[]) {
    this._collection = col;
  }

  // add item in collection
  public add(item: Client): void {
    this.collection.push(new Client(item));
  }

  // update item in collection
  public update(client: Client, state: StateClient) {
    client.state = state;
  }

  // delete item in collection

  // get item by id
}
