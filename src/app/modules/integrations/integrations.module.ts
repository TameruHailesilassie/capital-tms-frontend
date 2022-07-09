import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IntegrationsRoutingModule } from './integrations-routing.module';
import { IntegrationConfigComponent } from './integration-config/integration-config.component';
import { SaferwatchConfigComponent } from './saferwatch-config/saferwatch-config.component';
import { RmisConfigComponent } from './rmis-config/rmis-config.component';
import { QuickbookConfigComponent } from './quickbook-config/quickbook-config.component';
import { UIModule } from 'src/app/shared/ui/ui.module';

@NgModule({
  declarations: [
    IntegrationConfigComponent,
    SaferwatchConfigComponent,
    RmisConfigComponent,
    QuickbookConfigComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    IntegrationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class IntegrationsModule { }
