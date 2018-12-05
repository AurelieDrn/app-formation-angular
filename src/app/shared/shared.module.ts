import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableauComponent } from "./components/tableau/tableau.component";
import { StateDirective } from "./directives/state.directive";
import { TotalPipe } from "./pipes/total.pipe";

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, StateDirective],
  imports: [CommonModule],
})
export class SharedModule {}
