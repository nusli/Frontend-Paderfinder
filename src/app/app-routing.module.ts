import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';    //1

import { StammComponent } from './stamm/stamm.component';    //1
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent} from './register/register.component'
import { ImpressumComponent } from './impressum/impressum.component';
import { PoliciesComponent } from './policies/policies.component';
import { AboutComponent } from './about/about.component';
import { ChangeStammComponent } from './change-stamm/change-stamm.component';
import { SucheComponent } from './suche/suche.component';
import { AndererStammComponent } from './anderer-stamm/anderer-stamm.component';


const routes: Routes = [
  { path: '', component: HomeComponent },  
  
  { path: 'stamm', component: StammComponent },  
  { path: 'impressum', component: ImpressumComponent },  
  { path: 'policies', component: PoliciesComponent },  
  { path: 'about', component: AboutComponent },  
  { path: 'login', component: LoginComponent },   
  { path: 'register', component: RegisterComponent },        
  { path: 'changeStamm', component: ChangeStammComponent },    
  { path: 'suche', component: SucheComponent },  
  { path: 'andererStamm/:id', component: AndererStammComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
