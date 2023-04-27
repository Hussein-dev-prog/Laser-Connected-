import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { ProgramsComponent } from './programs/programs.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { FamilyinfoComponent } from './familyinfo/familyinfo.component';
import { AcademicinfoComponent } from './academicinfo/academicinfo.component';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer.component';
import { AboutTheGrantComponent } from './about-the-grant/about-the-grant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Page404Component,
    NavigationComponent,
    ProgramsComponent,
    PersonalinfoComponent,
    FamilyinfoComponent,
    AcademicinfoComponent,
    QuestionAndAnswerComponent,
    AboutTheGrantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}