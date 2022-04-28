import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "src/app/core/guards/admin.guard";
import { MainAnalyticsComponent } from "./mainanalytics/mainanalytics.component";
import { PersonalanalyticsComponent } from "./personalanalytics/personalanalytics.component";

const routes: Routes = [
  {
    path: "analytics/admin",
    component: MainAnalyticsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "analytics/personal",
    component: PersonalanalyticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
