import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../translation.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isEnabled = false;// Flag to indicate whether form is enabled or disabled

  constructor(private service: UserService, private route: Router, public translate: TranslationService) { }
  res: any; // create a variable to store response data

  ngOnInit(): void {
  }
  //this function check if the form is valid, it will change the status of the button signin to enabled or disabled.
  isDisabled(logindata: any) {
    if (!logindata.valid) {
      return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
  // function to proceed with user login
  prodceedLogin(logindata: any) {
    if (logindata.valid) {// check if the login form is valid
      this.isEnabled = this.isEnabled; // set isEnabled to its current value ;

      // call the UserService's ProceedLogin() function with the login form data
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.res = item; // store the response in the res variable
        if (this.res != null) {

          // if a token is returned, save it to localStorage and navigate to the home page
          localStorage.setItem('token', this.res.token);
          this.route.navigate(['home']);
        } else {
          alert("Login Failed");// if no token is returned, show an error message
        }
      })
    } else {
      // if the login form is invalid, do nothing
      
    }

  }

  // function to redirect to the register page
  redirectRegister() {
    this.route.navigate(['/register']);// navigate to the register page
  }

}
