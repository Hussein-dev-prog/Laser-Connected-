import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  ProceedLogin(inputdata: any) {
    return this.http.post('https://dummyjson.com/auth/login', inputdata);
  }
  IsLoogedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {

    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';

  }

  Registeration(inputdata: any) {
    return this.http.post('http://localhost:8000/users/createAccount', inputdata);
  }

}
