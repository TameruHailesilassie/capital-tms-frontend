import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "./page404/page404.component";

const routes: Routes = [

  {
    path: "analytics",
    loadChildren: () =>
      import("./analytics/analytics.module").then((m) => m.AnalyticsModule),
  },
  {
    path: "loads",
    loadChildren: () => import("./load/load.module").then((m) => m.LoadModule),
  },


  {
    path: "404",
    component:Page404Component
  },

  {
    path: "ui",
    loadChildren: () =>
      import("../shared/components/ui.module").then((m) => m.UiModule),
  },

  {
    path: "factoring-company",
    loadChildren: () =>
      import("./factoring-company/factoring-company.module").then(
        (m) => m.FactoringCompanyModule
      ),
  },

  {
    path: "carrier",
    loadChildren: () =>
      import("./carrier/carrier.module").then((m) => m.CarrierModule),
  },

  {
  path:"integrations",
  loadChildren:()=>
  import("./integrations/integrations.module").then((m)=>m.IntegrationsModule),
  },
  
  {
    path: "",
    loadChildren: () => import("./file-manager/file-manager.module").then((m) => m.FileManagerModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
