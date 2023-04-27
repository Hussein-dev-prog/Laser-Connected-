import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isEnabled = false;// Flag to indicate whether form is enabled or disabled

  constructor(private router: Router, private service: UserService, public translate: TranslationService) { }

  ngOnInit(): void {

  }

  // This function redirect to Login page
  RedirectLogin() {
    this.router.navigate(['login']);
  }

  // here we used the formGroup named registration to handle all data and validate them.
  registration = new FormGroup({
    // Defines a `FormControl` for the phone number input field with required validation and a pattern validator that matches a minimum of 8 digits.
    phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^\\d{8,}$')])),
    // Defines a `FormControl` for the email input field with required validation and an email format validator.
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    // Defines a `FormControl` for the password input field with required validation and a pattern validator that matches at least 8 characters containing at least one lowercase letter, one uppercase letter, and one digit.
    password: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}'),]))
  });

  // Returns the `FormControl` object for the phone number input field in the `registration` FormGroup.
  get phoneNumber() {
    return this.registration.get('phoneNumber');
  }

  // Returns the `FormControl` object for the email input field in the `registration` FormGroup.
  get email() {
    return this.registration.get('email');
  }

  // Returns the `FormControl` object for the password input field in the `registration` FormGroup.
  get password() {
    return this.registration.get('password');
  }

  //this function check if the form is valid, it will change the status of the button signup to enabled or disabled.
  isDisabled() {
    if (!this.registration.valid) {
      return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
  //This function is used when clicking on the signup button
  SaveUser() {

    alert("done");
  }

}
