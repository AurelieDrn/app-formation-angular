import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.scss"],
})
export class FormLoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: ["", Validators.required],
      password: [""],
    });
  }

  public onSubmit(): void {
    this.loginService
      .login(this.form.value.login, this.form.value.password)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log("error");
        },
      );
  }

  public isError(nfc: string): boolean {
    return this.form.get(nfc).invalid && this.form.get(nfc).touched;
  }
}
