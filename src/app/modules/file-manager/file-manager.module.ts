import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { UIModule } from "../../shared/ui/ui.module";
import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule , NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    FileViewerComponent
  ],

  imports: [
    CommonModule,
    UIModule,
    NgbModule,
    NgbDropdownModule,
    NgbModalModule,
    FileManagerRoutingModule,
    NgApexchartsModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
  
  ]

})
export class FileManagerModule { }
