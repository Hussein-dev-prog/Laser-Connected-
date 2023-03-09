import { Component, DoCheck } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private route: Router, private service: UserService) { }
  title = 'LaserFront';
  isMenuVisible = true;
  ngDoCheck(): void {
    const currentroute = this.route.url;
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }
  }
}
