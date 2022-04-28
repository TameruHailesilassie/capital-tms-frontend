import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FactoringCompanyRoutingModule } from './factoring-company-routing.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { UIModule } from "../../shared/ui/ui.module";

@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    FactoringCompanyRoutingModule,
    ReactiveFormsModule,
    UIModule
  ]
})
export class FactoringCompanyModule { }
