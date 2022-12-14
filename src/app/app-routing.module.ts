import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/patients/add/add.component';
import { DetailsComponent } from './pages/patients/details/details.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { RegisterComponent } from './pages/register/register.component';
// import {  } from "";


const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },{
    path: "register",
    component: RegisterComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'detail',
    component: DetailsComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
