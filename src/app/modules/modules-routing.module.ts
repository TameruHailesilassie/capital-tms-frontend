import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "analytics/company" },
  {
    path: "analytics",
    loadChildren: () =>
      import("./analytics/analytics.module").then((m) => m.AnalyticsModule),
  },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
