import { Client } from "src/app/shared/models/client";

export const fakeClients: Client[] = [
  new Client({
    id: "1",
    name: "Aurélie",
    email: "aurelie.durand@capgemini.com",
  }),
  new Client({
    id: "2",
    name: "Marie",
    email: "marie.dupont@capgemini.com",
  }),
];
