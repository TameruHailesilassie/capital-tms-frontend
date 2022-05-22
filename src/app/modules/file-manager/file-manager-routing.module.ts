import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FileViewerComponent } from "./file-viewer/file-viewer.component";

const routes: Routes = [
  {
    path: "files",
    component: FileViewerComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileManagerRoutingModule {}
