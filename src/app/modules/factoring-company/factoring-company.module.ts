import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyListComponent,
  
  ],
  imports: [
    FormsModule,
    CommonModule,
    FactoringCompanyRoutingModule,
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
