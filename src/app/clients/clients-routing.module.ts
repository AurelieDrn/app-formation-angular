import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommentClientComponent } from "./components/comment-client/comment-client.component";
import { DetailClientComponent } from "./components/detail-client/detail-client.component";
import { PageAddClientComponent } from "./pages/page-add-client/page-add-client.component";
import { PageClientsComponent } from "./pages/page-clients/page-clients.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PageClientsComponent,
    data: { title: "Clients" },
    children: [
      { path: "", redirectTo: "detail", pathMatch: "full" },
      { path: "detail", component: DetailClientComponent },
      { path: "comment", component: CommentClientComponent },
    ],
  },
  { path: "add", component: PageAddClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
