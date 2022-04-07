import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadRoutingModule } from "./load-routing.module";
import { LoadBoardComponent } from "./load-board/load-board.component";
import { CreatLoadComponent } from "./creat-load/creat-load.component";
import { UIModule } from "../../shared/ui/ui.module";
import { NgSelectModule } from '@ng-select/ng-select';
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { LoadsSortableDirective } from "./loadtable/loads-sortable.directive";
import { LoadShowDetailDirective } from "./loadtable/load-show-detail.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WidgetModule } from "src/app/shared/widget/widget.module";
import { LoadTable } from './loadtable/loadtable.component';

@NgModule({
  declarations: [LoadBoardComponent, CreatLoadComponent, LoadShowDetailDirective,LoadsSortableDirective, LoadTable],

  imports: [
    CommonModule,
    WidgetModule,
    UIModule,
    LoadRoutingModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbNavModule,
    NgSelectModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoadModule {}
