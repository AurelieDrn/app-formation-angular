import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ClientsRoutingModule } from "./clients-routing.module";
import { ClientComponent } from "./components/client/client.component";
import { FormReactiveClientComponent } from "./components/form-reactive-client/form-reactive-client.component";
import { AddClientComponent } from "./containers/add-client/add-client.component";
import { ListClientsComponent } from "./containers/list-clients/list-clients.component";
import { PageAddClientComponent } from "./pages/page-add-client/page-add-client.component";
import { PageClientsComponent } from "./pages/page-clients/page-clients.component";

@NgModule({
  declarations: [
    PageClientsComponent,
    ListClientsComponent,
    ClientComponent,
    PageAddClientComponent,
    AddClientComponent,
    FormReactiveClientComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ClientsModule {}
