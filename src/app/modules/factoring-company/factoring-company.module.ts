import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FactoringCompanyRoutingModule } from './factoring-company-routing.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { UIModule } from "../../shared/ui/ui.module";
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';

import {
  NgbDropdownModule,
  NgbNavModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { CompanyFormComponent } from './company-form/company-form.component';


@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyListComponent,
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    FactoringCompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UIModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbNavModule,
    NgSelectModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
  ]
})
export class FactoringCompanyModule { }
