import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PagePrestationsComponent } from "./pages/page-prestations/page-prestations.component";
import { PrestationsRoutingModule } from "./prestations-routing.module";
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, PrestationComponent],
  imports: [CommonModule, PrestationsRoutingModule],
})
export class PrestationsModule {}
