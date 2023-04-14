import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ProgramsComponent } from './programs/programs.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { FamilyinfoComponent } from './familyinfo/familyinfo.component';
import { AcademicinfoComponent } from './academicinfo/academicinfo.component';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer.component';
import { AboutTheGrantComponent } from './about-the-grant/about-the-grant.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "programs", component: ProgramsComponent },
  { path: "QuestionAndAnswer", component: QuestionAndAnswerComponent },
  { path: "AboutTheGrant", component: AboutTheGrantComponent },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "personalinfo", component: PersonalinfoComponent, canActivate: [AuthGuard] },
  { path: "familyinfo", component: FamilyinfoComponent, canActivate: [AuthGuard] },
  { path: "academicinfo", component: AcademicinfoComponent, canActivate: [AuthGuard] },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
