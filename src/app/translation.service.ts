import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: string;
  cssClass: string;
  direction: string = 'rtl'
  isEnglishStyle: boolean = false;
//this constructor take the difault value variables of a service
  constructor(public translate: TranslateService) {
    this.currentLang = 'ar';
    this.translate.use(this.currentLang);
    this.direction = 'rtl';
    this.cssClass = 'arabic';
  }
  //this function take the lang pressed by the user and will change tha language and the direction and the( css if need)
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    if(lang=='en'){
      this.direction = 'ltr'
      this.isEnglishStyle = true;
      this.cssClass = 'english';

    }
    else{
      this.direction = 'rtl'
      this.cssClass = 'arabic';

    }
  }
}
