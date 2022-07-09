import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationConfigComponent } from './integration-config/integration-config.component';
import { QuickbookConfigComponent } from './quickbook-config/quickbook-config.component';
import { RmisConfigComponent } from './rmis-config/rmis-config.component';
import { SaferwatchConfigComponent } from './saferwatch-config/saferwatch-config.component';

const routes: Routes = [
{
  path:"",
  component:IntegrationConfigComponent
},
{
  path:"rmis",
  component:RmisConfigComponent
},
{
  path:"saferWatch",
  component:SaferwatchConfigComponent
},
{
  path:"quickBooks",
  component:QuickbookConfigComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IntegrationsRoutingModule { }
