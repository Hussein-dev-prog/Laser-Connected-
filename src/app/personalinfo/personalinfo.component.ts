import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, MinValidator } from '@angular/forms';
import { TranslationService } from '../translation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {
  isEnabled = true;

  constructor(private router: Router, public translate: TranslationService) { }

  ngOnInit(): void {

  }
  personalInfo = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required,(c: AbstractControl) => Validators.required(c),Validators.pattern('[ا-ي\u0600-\u06FF ]*'),])),
    familyName: new FormControl('', Validators.compose([Validators.required,(c: AbstractControl) => Validators.required(c),Validators.pattern('[ا-ي\u0600-\u06FF ]*')])),
    fatherName: new FormControl('', Validators.compose([Validators.required,(c: AbstractControl) => Validators.required(c),Validators.pattern('[ا-ي\u0600-\u06FF ]*')])),
    nameAndLastName: new FormControl('', Validators.compose([Validators.required,(c: AbstractControl) => Validators.required(c),Validators.pattern('[ا-ي\u0600-\u06FF ]*')])),
    gender: new FormControl('', Validators.compose([Validators.required])),
    socialStatus: new FormControl('', Validators.compose([Validators.required])),
    placeOfBirth: new FormControl('', Validators.compose([Validators.required])),
    dateOfBirth: new FormControl('', Validators.compose([Validators.required])),
    localityAndRegistrationNumber: new FormControl('', Validators.compose([Validators.required])),
    addressOfResidenceInLebanon: new FormControl('', Validators.compose([Validators.required])),
    city: new FormControl('', Validators.compose([Validators.required])),
    street: new FormControl('', Validators.compose([Validators.required])),
    building: new FormControl('', Validators.compose([Validators.required])),
    nationality: new FormControl('', Validators.compose([Validators.required])),
    additionalContactPhoneNumbers: new FormControl('', Validators.compose([Validators.required]))
  });
  get name() {
    return this.personalInfo.get('name');
  }
  get familyName() {
    return this.personalInfo.get('familyName');
  }
  get fatherName() {
    return this.personalInfo.get('fatherName');
  }
  get nameAndLastName() {
    return this.personalInfo.get('nameAndLastName');
  }
  get gender() {
    return this.personalInfo.get('gender');
  }
  get socialStatus() {
    return this.personalInfo.get('socialStatus');
  }
  get placeOfBirth() {
    return this.personalInfo.get('placeOfBirth');
  }
  get dateOfBirth() {
    return this.personalInfo.get('dateOfBirth');
  }
  get localityAndRegistrationNumber() {
    return this.personalInfo.get('localityAndRegistrationNumber');
  }
  get addressOfResidenceInLebanon() {
    return this.personalInfo.get('addressOfResidenceInLebanon');
  }
  get city() {
    return this.personalInfo.get('city');
  }
  get street() {
    return this.personalInfo.get('street');
  }
  get building() {
    return this.personalInfo.get('building');
  }
  get nationality() {
    return this.personalInfo.get('nationality');
  } get additionalContactPhoneNumbers() {
    return this.personalInfo.get('additionalContactPhoneNumbers');
  }
  isDisabled() {
    if (!this.personalInfo.valid) {
            return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
}
