import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCompanyComponent } from "./add-company/add-company.component";
import { CompanyListComponent } from "./company-list/company-list.component";

const routes: Routes = [
  {
    path: "factoring-company/add",
    component: AddCompanyComponent,
  },
  {
    path: "factoring-company/list",
    component: CompanyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactoringCompanyRoutingModule {}
