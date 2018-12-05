import { StateClient } from "../enums/state-client.enum";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  state: StateClient = StateClient.INACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
