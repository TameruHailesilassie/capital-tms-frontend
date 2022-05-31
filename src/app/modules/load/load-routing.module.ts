import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadBoardComponent } from './load-board/load-board.component';
import { CreatLoadComponent } from './creat-load/creat-load.component';
import { LoadDetailComponent } from './load-detail/load-detail.component';
import { FileViewerComponent } from '../file-manager/file-viewer/file-viewer.component';
const routes: Routes = [

  {
    path: "",

    children: [
      {
      path: "list",
      component: LoadBoardComponent,
      },
      {
        path: 'create',
        component: CreatLoadComponent,
        pathMatch:'full'
      },

      {
        path: "view/:id",
        component: LoadDetailComponent,
      pathMatch:'full'

      },

      {
        path: 'view/:id/files',
        component: FileViewerComponent,
       pathMatch:'full'
      },

    ]

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadRoutingModule { }
