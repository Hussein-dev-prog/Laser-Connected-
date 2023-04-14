import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: UserService, private route: Router, public translate:TranslationService ) { }
  res: any;

  ngOnInit(): void {
  }
  prodceedLogin(logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.res = item;
        if (this.res != null) {
          localStorage.setItem('token', this.res.token);
          this.route.navigate(['home']);
        } else {
          alert("Login Failed");
        }
      })
    }

  }
  redirectRegister() {
    this.route.navigate(['/register']);
  }
  
}
