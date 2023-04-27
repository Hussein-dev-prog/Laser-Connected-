import { Component, OnInit } from '@angular/core';
declare var window: any;
import { TranslationService } from '../translation.service';
import { FormControl, FormGroup, Validators, AbstractControl, MinValidator } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthGuard } from '../Guard/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  isEnabled = false;// Flag to indicate whether form is enabled or disabled

  // Array of options to display scholarship programs
  options = [
    { id: 1, name: 'Lebanese University Scholarship', nationality: 'leb', degreeType: 'BS in computer', university: 'q' },
    { id: 2, name: 'Lebanese International University Scholarship', nationality: 'leb', degreeType: 'BS in computer', university: 'w' },
    { id: 3, name: 'Azem University', nationality: 'iraq', degreeType: 'BS in eng', university: 'd' },
    { id: 4, name: 'University Of Balamand', nationality: 'russian', degreeType: 'BA in Business', university: 'f' },
    { id: 5, name: 'i dont know', nationality: 'pelastine', degreeType: 'g', university: '' }
  ];

  // Model to store the scholarship application details
  applicationModel: any;

  // Selected values of dropdowns
  selectedNationality: string = '';
  selectedDegreeType: string = '';
  selectedUniversity: string = '';

  constructor(public translate: TranslationService, private authService: AuthGuard, private user: UserService, private router: Router) {

  }

  ngOnInit(): void {

    // Initializing the Bootstrap modal
    this.applicationModel = new window.bootstrap.Modal(
      document.getElementById("ScholarApplicationModal")
    );
  }

  // Function to filter scholarship options based on selected dropdown values
  filterItems(): any[] {
    let filteredItems = this.options;
    if (this.selectedNationality) {
      filteredItems = filteredItems.filter(item => item.nationality === this.selectedNationality);
    }
    if (this.selectedDegreeType) {
      filteredItems = filteredItems.filter(item => item.degreeType === this.selectedDegreeType);
    }
    if (this.selectedUniversity) {
      filteredItems = filteredItems.filter(item => item.university === this.selectedUniversity);
    }
    return filteredItems;
  }

  // FormGroup for scholarship application
  scholarshipApplication = new FormGroup({
    university: new FormControl('', Validators.compose([Validators.required])),
    degreeType: new FormControl('', Validators.compose([Validators.required])),
    majore: new FormControl('', Validators.compose([Validators.required])),
    notes: new FormControl('notes', Validators.compose([Validators.required])),
  });


  // Function to open scholarship application modal
  openModal() {
    if (!this.user.IsLoogedIn()) {
      this.router.navigate(['login']);

    }
    else {
      this.applicationModel.show();

    }
  }
  // Function to close scholarship application modal
  doSomething() {
    this.applicationModel.hide();
  }

  // Getter functions for form controls
  get university() {
    return this.scholarshipApplication.get('university');
  }
  get degreeType() {
    return this.scholarshipApplication.get('degreeType');
  }
  get majore() {
    return this.scholarshipApplication.get('majore');
  }
  get notes() {
    return this.scholarshipApplication.get('notes');
  }

  // Function to check if the scholarship application form is valid and disable/enable the Button
  isDisabled() {
    if (!this.scholarshipApplication.valid) {
      return !this.isEnabled;
    }
    else {
      return this.isEnabled;

    }

  }
}
