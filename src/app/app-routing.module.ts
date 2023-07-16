import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { 
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [


      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
    
      {
        path: 'consultation',
        loadChildren: () =>
          import('./views/consultation/consultation.module').then((m) => m.ConsultationModule)
      },

      
      {
        path: 'datatable1',
        loadChildren: () =>
          import('./views/datatable1/datatable1.module').then((m) => m.Datatable1Module)
      },
     
    ]
  },
 
 


  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
