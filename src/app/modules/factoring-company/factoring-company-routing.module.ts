import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FileViewerComponent } from "../file-manager/file-viewer/file-viewer.component";
import { AddCompanyComponent } from "./add-company/add-company.component";
import { CompanyListComponent } from "./company-list/company-list.component";

const routes: Routes = [
  {
    path: "factoring-company",

    children: [

      {
        path: "",
        component: CompanyListComponent,
      },

      {
        path: "add",
        component: AddCompanyComponent,
      },
      {
        path: "files",
        component: FileViewerComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactoringCompanyRoutingModule { }
