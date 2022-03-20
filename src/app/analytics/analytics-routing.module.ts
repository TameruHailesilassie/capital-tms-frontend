import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyanalyticsComponent } from './companyanalytics/companyanalytics.component';
import { OfficeanalyticsComponent } from './officeanalytics/officeanalytics.component';
import { PersonalanalyticsComponent } from './personalanalytics/personalanalytics.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyanalyticsComponent
  },
  {
    path: 'office',
    component: OfficeanalyticsComponent
  },

  {
    path: 'personal',
    component: PersonalanalyticsComponent

  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
