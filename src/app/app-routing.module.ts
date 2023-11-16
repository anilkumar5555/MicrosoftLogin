import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { environment } from 'src/environments/environment';
import { MaslGuard } from './masl.guard';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { StudentComponent } from './student/student.component';
   

const guards:any[]=environment.enableMsal?[MsalGuard]:[];
const routes: Routes = [
  {
  path:'Restricted-page', component:RestrictedPageComponent, canActivate:[guards]
  },
  {
    path:'public-page', component:PublicpageComponent
    },
    {path:'student' ,component:StudentComponent,canActivate:[guards]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
