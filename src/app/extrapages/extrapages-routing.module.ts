import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page401Component } from './page401/page401.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
    {
        path: 'unauthorized',
        component: Page401Component
    },
    {
        path: '404',
        component: Page404Component
    },
   /*  {
        path: 'coming-soon',
        component: ComingsoonComponent
    },
    {
        path: '404',
        component: Page404Component
    },
    {
        path: '500',
        component: Page500Component
    },
    {
        path: 'login-2',
        component: Login2Component
    },
    {
        path: 'lock-screen-1',
        component: LockscreenComponent
    },
    {
        path: 'lock-screen-2',
        component: Lockscreen2Component
    },
    {
        path: 'confirm-mail',
        component: ConfirmmailComponent
    },
    {
        path: 'confirm-mail-2',
        component: Confirmmail2Component
    },
    {
        path: 'email-verification',
        component: VerificationComponent
    },
    {
        path: 'email-verification-2',
        component: Verification2Component
    },
    {
        path: 'two-step-verification',
        component: SteptwoverificationComponent
    },
    {
        path: 'two-step-verification-2',
        component: Steptwoverification2Component
    }, */
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExtrapagesRoutingModule { }
