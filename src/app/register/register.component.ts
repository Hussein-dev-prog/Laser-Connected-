import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, MinValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isEnabled = false;

  constructor(private router: Router, private service: UserService, public translate: TranslationService) { }

  ngOnInit(): void {

  }
  res: any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  registration = new FormGroup({
    phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(?!.*\\s)(?=.*[0-9]).{8,}')])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl(null, [
      (c: AbstractControl) => Validators.required(c),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}'),])
  });
  isDisabled() {
    if (!this.registration.valid) {
            return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
  SaveUser() {

    // alert(this.registration.value.password)
  }

}
