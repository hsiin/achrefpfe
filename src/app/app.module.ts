import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RegisterComponent } from './pages/register/register.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { PatientsComponent } from './pages/patients/patients.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { DetailsComponent } from './pages/patients/details/details.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddComponent } from './pages/patients/add/add.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, PatientsComponent, DetailsComponent, AddComponent],
  imports: [
    BrowserModule,
    NzRadioModule,
    NzIconModule,
    AppRoutingModule,
    NzDescriptionsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzBadgeModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzListModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
