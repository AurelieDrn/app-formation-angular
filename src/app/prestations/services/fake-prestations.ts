import { Prestation } from "src/app/shared/models/prestation";

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: "1",
    typePresta: "Coaching",
    client: "Capgemini",
    nbJours: 20,
    tjmHt: 800,
  }),
  new Prestation({
    id: "2",
    typePresta: "Formation",
    client: "Synapsys",
    nbJours: 10,
    tjmHt: 600,
  }),
];
