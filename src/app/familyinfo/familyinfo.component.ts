import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, MinValidator } from '@angular/forms';
import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-familyinfo',
  templateUrl: './familyinfo.component.html',
  styleUrls: ['./familyinfo.component.css']
})
export class FamilyinfoComponent implements OnInit {
  isEnabled = false;// Flag to indicate whether form is enabled or disabled


  constructor(public translate: TranslationService) { }

  ngOnInit(): void {

  }
    // Defining the FormGroup that will contain our form controls
familyInfo = new FormGroup({
    familyMembers: new FormControl('', Validators.compose([Validators.required])),
    fatherJobType: new FormControl('', Validators.compose([Validators.required])),
    fatherSalary: new FormControl('', Validators.compose([Validators.required])),
    motherJobType: new FormControl('', Validators.compose([Validators.required])),
    motherSalary: new FormControl('', Validators.compose([Validators.required])),
    applicantSocialStatus: new FormControl('', Validators.compose([Validators.required])),
    applicantChildrenNo: new FormControl('', Validators.compose([Validators.required])),
    applicantJobType: new FormControl('', Validators.compose([Validators.required])),
    applicantSalary: new FormControl('', Validators.compose([Validators.required])),
    notes: new FormControl(' ', Validators.compose([Validators.required]))
  })
    // Creating getters for each form control so that they can be accessed in the template
get familyMembers() {
    return this.familyInfo.get('familyMembers');
  }
  get fatherJobType() {
    return this.familyInfo.get('fatherJobType');
  }
  get fatherSalary() {
    return this.familyInfo.get('fatherSalary');
  }
  get motherJobType() {
    return this.familyInfo.get('motherJobType');
  }
  get motherSalary() {
    return this.familyInfo.get('motherSalary');
  }
  get applicantSocialStatus() {
    return this.familyInfo.get('applicantSocialStatus');
  }
  get applicantChildrenNo() {
    return this.familyInfo.get('applicantChildrenNo');
  }
  get applicantJobType() {
    return this.familyInfo.get('applicantJobType');
  }
  get applicantSalary() {
    return this.familyInfo.get('applicantSalary');
  }
  get notes() {
    return this.familyInfo.get('notes');
  }
   //this function check if the form is valid, it will change the status of the button next to enabled or disabled.
  isDisabled() {
    if (!this.familyInfo.valid) {
            return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
}
