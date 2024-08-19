import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { CompanycontactComponent } from './companycontact/companycontact.component';


export const routes: Routes = [
 { 'path':'','title':'Home', component:HomeComponent},
 { 'path':'about','title':'About', component:AboutComponent},
 { 'path':'team','title':'Team', component:TeamComponent},
 { 'path':'services','title':'services', component:ServicesComponent},
 { 'path':'contact','title':'Contact',component:ContactComponent},
 { 'path':'apply','title':'apply',component:CompanycontactComponent},

 { 'path':'**',component:PageNotFoundComponent}
];
