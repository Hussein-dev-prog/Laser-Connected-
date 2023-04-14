import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, MinValidator } from '@angular/forms';
import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-academicinfo',
  templateUrl: './academicinfo.component.html',
  styleUrls: ['./academicinfo.component.css']
})
export class AcademicinfoComponent implements OnInit {
  isEnabled = false;

  constructor(public translate: TranslationService) { }

  ngOnInit(): void {

  }
  academicInfo = new FormGroup({
    degreeType: new FormControl('', Validators.compose([Validators.required])),
    degreeStatus: new FormControl('', Validators.compose([Validators.required])),
    instituteName: new FormControl('', Validators.compose([Validators.required])),
    academicYear: new FormControl('', Validators.compose([Validators.required])),
    studentsUniId: new FormControl('', Validators.compose([Validators.required])),
    major: new FormControl('', Validators.compose([Validators.required])),
    grade: new FormControl('', Validators.compose([Validators.required])),
    passedCreditsNb: new FormControl('', Validators.compose([Validators.required])),
  })
  get degreeType() {
    return this.academicInfo.get('degreeType');
  }
  get degreeStatus() {
    return this.academicInfo.get('degreeStatus');
  }
  get instituteName() {
    return this.academicInfo.get('instituteName');
  }
  get academicYear() {
    return this.academicInfo.get('academicYear');
  }
  get studentsUniId() {
    return this.academicInfo.get('studentsUniId');
  }
  get major() {
    return this.academicInfo.get('major');
  }
  get grade() {
    return this.academicInfo.get('grade');
  }
  get passedCreditsNb() {
    return this.academicInfo.get('passedCreditsNb');
  }
  isDisabled() {
    if (!this.academicInfo.valid) {
            return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }

}
