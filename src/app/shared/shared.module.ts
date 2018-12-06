import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TemplatesModule } from "../templates/templates.module";
import { AddRowComponent } from "./components/add-row/add-row.component";
import { TableauComponent } from "./components/tableau/tableau.component";
import { StateDirective } from "./directives/state.directive";
import { TotalPipe } from "./pipes/total.pipe";

@NgModule({
  declarations: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    AddRowComponent,
  ],
  exports: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    AddRowComponent,
    TemplatesModule,
    FontAwesomeModule,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, TemplatesModule],
})
export class SharedModule {}
