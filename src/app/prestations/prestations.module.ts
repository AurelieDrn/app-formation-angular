import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { CommentPrestationComponent } from "./components/comment-prestation/comment-prestation.component";
import { DetailPrestationComponent } from "./components/detail-prestation/detail-prestation.component";
import { FormPrestationComponent } from "./components/form-prestation/form-prestation.component";
import { FormReactivePrestationComponent } from "./components/form-reactive-prestation/form-reactive-prestation.component";
import { PrestationComponent } from "./components/prestation/prestation.component";
import { AddPrestationComponent } from "./containers/add-prestation/add-prestation.component";
import { ListPrestationsComponent } from "./containers/list-prestations/list-prestations.component";
import { PageAddPrestationComponent } from "./pages/page-add-prestation/page-add-prestation.component";
import { PagePrestationsComponent } from "./pages/page-prestations/page-prestations.component";
import { PrestationsRoutingModule } from "./prestations-routing.module";
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent,
    FormReactivePrestationComponent,
    DetailPrestationComponent,
    CommentPrestationComponent,
    EditPrestationComponent,
    PageEditPrestationComponent,
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
  ],
})
export class PrestationsModule {}
