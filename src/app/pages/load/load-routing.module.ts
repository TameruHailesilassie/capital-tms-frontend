import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadBoardComponent } from './load-board/load-board.component';
import { CreatLoadComponent } from './creat-load/creat-load.component';
const routes: Routes = [

  {
    path: 'load-board',
    component: LoadBoardComponent
  },
  
  {
    path: 'create',
    component: CreatLoadComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadRoutingModule { }
