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
        data: { breadcrumb: 'LoadBoard' },
        children:[
          {
            path: "view/:id",
            component: LoadDetailComponent,
            pathMatch: 'full'
    
    
          },
    
          {
            path: 'view/:id/files',
            component: FileViewerComponent,
            pathMatch: 'full',
            data: { breadcrumb: 'Files' }
          },
        ]
      },
      {
        path: 'create',
        component: CreatLoadComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Add' }
      },

    

    ]

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadRoutingModule { }
