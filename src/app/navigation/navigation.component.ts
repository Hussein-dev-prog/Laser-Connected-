import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  constructor(public translate: TranslationService, public user: UserService) { }
  ngOnInit(): void {


  }

  // This function is triggered when the user changes the selected language in the select language in html
  onChangeLang(event: any) {
    // Get the value of the selected language from the event

    let value = event.target.value;
    if (value == 'en') {
      // If it is, use the Angular Translate service to switch the language to English
      this.translate.changeCurrentLang('en')
    }
    else {
      // If it's not English, assume it's Arabic and use the Angular Translate service to switch the language to Arabic
      this.translate.changeCurrentLang('ar')
    }
  }

}
