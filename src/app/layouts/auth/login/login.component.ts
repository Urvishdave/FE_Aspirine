import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AuthenticationVM } from 'src/app/services/authentication/authenctication.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.innitializeLoginForm();
  get loginFormControls() { return this.loginForm?.controls; }

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() { }

  private innitializeLoginForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]),
      password: new FormControl('', Validators.required)
    });
  }

  FormSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let userDetails: AuthenticationVM.authDetails = {
      email: this.loginFormControls["email"].value,
      password: this.loginFormControls["password"].value
    }
    this.authenticationService.setLoginToken(userDetails).then(res => {
      if(res){
        //Show success
        this.loginForm = this.innitializeLoginForm();
      }
    });
  }
}
