import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NgbCollapseModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from '@ng-select/ng-select';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { LoaderComponent } from './loader/loader.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CarrierFormComponent } from './carrier-form/carrier-form.component';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [PagetitleComponent,  LoaderComponent,CompanyFormComponent,CarrierFormComponent],
  imports: [
    NgbDropdownModule,
    NgbNavModule,
    NgxMaskModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule
  ],
  exports: [PagetitleComponent, LoaderComponent,CompanyFormComponent,CarrierFormComponent]
})
export class UIModule { }
