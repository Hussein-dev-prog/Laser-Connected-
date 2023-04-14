import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: string;
  direction: string = 'rtl'
  isEnglishStyle: boolean = false;

  constructor(public translate: TranslateService) {
    this.currentLang = 'ar';
    this.translate.use(this.currentLang);
    this.direction = 'rtl';
  }
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    if(lang=='en'){
      this.direction = 'ltr'
      this.isEnglishStyle = true;

    }
    else{
      this.direction = 'rtl'
    }
  }
}
