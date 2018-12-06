import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TemplatesModule } from "../templates/templates.module";
import { AddRowComponent } from "./components/add-row/add-row.component";
import { TableauComponent } from "./components/tableau/tableau.component";
import { StateDirective } from "./directives/state.directive";
import { TotalPipe } from "./pipes/total.pipe";
import { TabComponent } from "./components/tab/tab.component";

@NgModule({
  declarations: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    AddRowComponent,
    TabComponent,
  ],
  exports: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    AddRowComponent,
    TemplatesModule,
    FontAwesomeModule,
    TabComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, TemplatesModule],
})
export class SharedModule {}
