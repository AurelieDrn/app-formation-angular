import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";
import { UiComponent } from "./containers/ui/ui.component";

@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  exports: [UiComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class UiModule {}
