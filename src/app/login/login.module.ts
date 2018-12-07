import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { PageLoginComponent } from "./pages/page-login/page-login.component";

@NgModule({
  declarations: [PageLoginComponent, FormLoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
