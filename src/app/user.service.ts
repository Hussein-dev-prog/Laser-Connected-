import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  // this function takes the input data by login add will send the to the API
  ProceedLogin(inputdata: any) {
    return this.http.post('https://dummyjson.com/auth/login', inputdata);
  }
  //check if the token is valid in the local storage
  IsLoogedIn() {
    return localStorage.getItem('token') != null;
  }
//function get the token from local storage
  GetToken() {

    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

  }
  // this function takes the input data by register add will send the to the API
  Registeration(inputdata: any) {
    return this.http.post('', inputdata);
  }
  //it will clear the local storage and navigate to programs
  logout():void{
    this.router.navigate(['programs']);
    localStorage.clear();

  }
 

}
