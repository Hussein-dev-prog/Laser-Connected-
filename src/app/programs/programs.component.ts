import { Component, OnInit } from '@angular/core';
declare var window:any;
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
export class ProgramsComponent implements OnInit{
  options = [
    {id: 1, name: 'Lebanese University Scholarship', nationality:'leb',degreeType:'BS in computer',university:'q'},
    {id: 2, name: 'Lebanese International University Scholarship',nationality:'leb',degreeType:'BS in computer',university:'w'},
    {id: 3, name: 'Azem University', nationality:'iraq',degreeType:'BS in eng',university:'d'},
    {id: 4, name: 'University Of Balamand', nationality:'russian',degreeType:'BA in Business',university:'f'},
    {id: 5, name: 'i dont know', nationality:'pelastine',degreeType:'g',university:''}
  ];
  applicationModel: any;
  selectedNationality: string = '';
  selectedDegreeType: string = '';
  selectedUniversity: string = '';
  
  constructor(public translate:TranslationService,private authService:AuthGuard,private user:UserService,private router:Router) { 

  }

  ngOnInit(): void {
    this.applicationModel = new window.bootstrap.Modal(
      document.getElementById("ScholarApplicationModal")
    );
  }
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
  
  scholarshipApplication = new FormGroup({
  });
  openModal(){
    if(!this.user.IsLoogedIn()){
      this.router.navigate(['login']);

    }
    else{
      this.applicationModel.show();

    }
  }
  doSomething(){
    this.applicationModel.hide();
  }
}
