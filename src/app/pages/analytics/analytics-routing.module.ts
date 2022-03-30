import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { SuperAdminGuard } from 'src/app/core/guards/superadmin.guard';
import { CompanyanalyticsComponent } from './companyanalytics/companyanalytics.component';
import { OfficeanalyticsComponent } from './officeanalytics/officeanalytics.component';
import { PersonalanalyticsComponent } from './personalanalytics/personalanalytics.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyanalyticsComponent,canActivate:[SuperAdminGuard]
  },
  {
    path: 'office',
    component: OfficeanalyticsComponent, canActivate:[AdminGuard]
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
