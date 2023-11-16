import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import{StudentService}from './student.service'
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { StudentComponent } from './student/student.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export function MSALinstancefactory():IPublicClientApplication
{
  return new PublicClientApplication({
  auth:{     
  clientId:"1ef78784-5f56-4f62-9f00-ea295af92cbf",
  redirectUri:"http://localhost:4200"
}
  })
}
@NgModule({
  declarations: [
    AppComponent,
    PublicpageComponent,
    RestrictedPageComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MsalModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    HttpClient
  ],
  providers: [
    StudentService,HttpClientModule,
    {
      provide:MSAL_INSTANCE,
      useFactory:MSALinstancefactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
