import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.innitializeRegisterForm();
  get registerformControls() { return this.registerForm?.value; }


  constructor(
    private router :Router,
    private apiService: ApiService,
  ) { }



  ngOnInit() {
  }

  private innitializeRegisterForm() {
    return this.registerForm= new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      mobile_number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]),
      password: new FormControl('', Validators.required),
    });
  }
  // convenience getter for easy access to form fields

  FormSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.apiService.POSTAPICallAsync("",this.registerformControls).then(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
      )
  }
}
