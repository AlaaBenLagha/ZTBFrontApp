import { NgModule } from '@angular/core';
import { ConsultationComponent } from './consultation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ConsultationComponent,
    data: {
      title: 'Consultation',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationRoutingModule { }
