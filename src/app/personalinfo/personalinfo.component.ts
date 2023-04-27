// Importing necessary modules and services
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
  isEnabled = false; // Flag to indicate whether form is enabled or disabled

  constructor(private router: Router, public translate: TranslationService) { }

  ngOnInit(): void {

  }

  // Defining the form group with form controls and validators
  personalInfo = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\s]+'), // Validation pattern for Arabic name input
    ])),
    familyName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\s]+'), // Validation pattern for Arabic family name input
    ])),
    fatherName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\s]+'), // Validation pattern for Arabic father name input
    ])),
    nameEnglish: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z\s]*$'), // Validation pattern for English name input
    ])),
    familyNameEnglish: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z\s]*$'), // Validation pattern for English family name input
    ])),
    fatherNameEnglish: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z\s]*$'), // Validation pattern for English father name input
    ])),
    gender: new FormControl('', Validators.compose([
      Validators.required, // Validation for required gender input
    ])),
    socialStatus: new FormControl('', Validators.compose([
      Validators.required, // Validation for required social status input
    ])),
    placeOfBirth: new FormControl('', Validators.compose([
      Validators.required, // Validation for required place of birth input
    ])),
    dateOfBirth: new FormControl('', Validators.compose([
      Validators.required, // Validation for required date of birth input
    ])),
    localityAndRegistrationNumber: new FormControl('', Validators.compose([
      Validators.required, // Validation for required locality and registration number input
    ])),
    addressOfResidenceInLebanon: new FormControl('', Validators.compose([
      Validators.required, // Validation for required address of residence input
    ])),
    city: new FormControl('', Validators.compose([
      Validators.required, // Validation for required city input
    ])),
    street: new FormControl('', Validators.compose([
      Validators.required, // Validation for required street input
    ])),
    building: new FormControl('', Validators.compose([
      Validators.required, // Validation for required building input
    ])),
    nationality: new FormControl('', Validators.compose([
      Validators.required, // Validation for required nationality input
    ])),
    additionalContactPhoneNumbers: new FormControl(' ', Validators.compose([
      Validators.required, // Validation for required additional contact phone numbers input
    ]))
  });

  // Getter methods to access form controls
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
  get nameEnglish() {
    return this.personalInfo.get('nameEnglish');
  }
  get familyNameEnglish() {
    return this.personalInfo.get('familyNameEnglish');
  }
  get fatherNameEnglish() {
    return this.personalInfo.get('fatherNameEnglish');
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
  }
  get additionalContactPhoneNumbers() {
    return this.personalInfo.get('additionalContactPhoneNumbers');
  }
   //this function check if the form is valid, it will change the status of the button next to enabled or disabled.
  isDisabled() {
    if (!this.personalInfo.valid) {
      return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
}
