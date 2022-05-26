import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadBoardComponent } from './load-board/load-board.component';
import { CreatLoadComponent } from './creat-load/creat-load.component';
import { LoadDetailComponent } from './load-detail/load-detail.component';
import { FileViewerComponent } from '../file-manager/file-viewer/file-viewer.component';
const routes: Routes = [

  {
    path: 'loads',

    children: [

      {
        path: "",
        component: LoadBoardComponent
      }
      ,
      {
        path: 'create',
        component: CreatLoadComponent
      },
      {
        path: ':id',
        children: [

          {
            path: "",
            component: LoadDetailComponent,

          },

          {
            path: 'files',
            component: FileViewerComponent
          }
        ]

      }
    ]






  },

  {
    path: 'loads/create',
    component: CreatLoadComponent
  }
  , {
    path: 'loads/:id',
    component: LoadDetailComponent,
    children: [
      {
        path: 'files',
        component: FileViewerComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadRoutingModule { }
