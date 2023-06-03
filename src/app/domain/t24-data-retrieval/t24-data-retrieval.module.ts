import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { T24DataRetrievalComponent } from './t24-data-retrieval.component';
import { Datatable1RoutingModule } from './datatable1-routing.module';
import { T24RetrievalServiceService } from '../../service/t24-retrieval-service.service';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,     
      Datatable1RoutingModule,
      FormsModule 
    ],
      declarations: [T24DataRetrievalComponent],
      exports: [
        T24DataRetrievalComponent
        // other components...
      ],
      providers: [ T24RetrievalServiceService ]
  })
  export class T24DataRetrievalModule { }
  