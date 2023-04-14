import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  constructor(public translate: TranslationService,public user:UserService) { }
  ngOnInit(): void {


  }

  onChangeLang(event: any) {
    let value = event.target.value;
    if (value == 'en') {
      this.translate.changeCurrentLang('en')
    }
    else {
      this.translate.changeCurrentLang('ar')
    }
  }

}
