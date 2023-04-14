import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-about-the-grant',
  templateUrl: './about-the-grant.component.html',
  styleUrls: ['./about-the-grant.component.css']
})
export class AboutTheGrantComponent {
  constructor(public translate: TranslationService) { }

}
