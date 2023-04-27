import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:UserService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // Checking if the user is logged in or not.
if(this.service.IsLoogedIn()){
      return true; // If the user is logged in, allow access to the requested route.
    }else{
      this.route.navigate(['login']); // If the user is not logged in, redirect to the login page.
      return false; // Deny access to the requested route.
    }
  }
  
}
