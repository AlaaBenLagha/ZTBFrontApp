import { NgModule } from '@angular/core';
import { T24DataRetrievalComponent } from './t24-data-retrieval.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: T24DataRetrievalComponent,
    data: {
      title: 'Data',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Datatable1RoutingModule { }
