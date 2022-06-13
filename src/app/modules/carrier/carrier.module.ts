import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierRoutingModule } from './carrier-routing.module';
import { AddCarrierComponent } from './add-carrier/add-carrier.component';
import { UIModule } from "../../shared/ui/ui.module";


@NgModule({
  declarations: [
    AddCarrierComponent,
  ],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    UIModule
  ]
})
export class CarrierModule { }
