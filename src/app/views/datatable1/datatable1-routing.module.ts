import { NgModule } from '@angular/core';
import { Datatable1Component } from './datatable1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Datatable1Component,
    data: {
      title: 'Datatable',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Datatable1RoutingModule { }
