import { NgModule } from '@angular/core';
import { ImagedisplayComponent } from './imagedisplay.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ImagedisplayComponent,
    data: {
      title: 'Imagedisplay',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesdisplayRoutingModule { }
