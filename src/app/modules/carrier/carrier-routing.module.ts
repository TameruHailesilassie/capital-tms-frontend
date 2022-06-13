import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarrierComponent } from './add-carrier/add-carrier.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path: "add",
        component: AddCarrierComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrierRoutingModule { }
