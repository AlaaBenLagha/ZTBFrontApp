import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConsultationComponent } from './consultation.component';
import { ConsultationRoutingModule } from './consultation-routing.module';
import { Datatable1Module } from '../datatable1/datatable1.module';

import {CardModule,
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,} from '@coreui/angular';


@NgModule({
  declarations: [ConsultationComponent],
  imports: [
    ConsultationRoutingModule,
    CardModule,
    Datatable1Module,
    AvatarModule,
    MatPaginatorModule,
    ButtonGroupModule,
    ButtonModule,
    CommonModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule
  ]
})
export class ConsultationModule { }
