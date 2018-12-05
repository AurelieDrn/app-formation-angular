import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAddClientComponent } from "./pages/page-add-client/page-add-client.component";
import { PageClientsComponent } from "./pages/page-clients/page-clients.component";

const appRoutes: Routes = [
  { path: "", component: PageClientsComponent },
  { path: "add", component: PageAddClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
})
export class ClientsRoutingModule {}
