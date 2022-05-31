import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FileViewerComponent } from "../file-manager/file-viewer/file-viewer.component";
import { AddCompanyComponent } from "./add-company/add-company.component";
import { CompanyListComponent } from "./company-list/company-list.component";

const routes: Routes = [
  {
    path: "",
    children: [

      {
        path: "list",
        component: CompanyListComponent,
        data: { breadcrumb: 'Companies' },
        children:[
        
          {
            path: 'view/:id/files',
            component: FileViewerComponent,
            pathMatch: 'full',
            data: { breadcrumb: 'Files' }
          },

        ]

      },

      {
        path: "add",
        component: AddCompanyComponent,
      },
     
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactoringCompanyRoutingModule { }
