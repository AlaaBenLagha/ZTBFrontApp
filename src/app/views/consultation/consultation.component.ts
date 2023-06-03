import { AfterViewInit, Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



interface IChk {
  codeVal: string;
  codeRemettant: string;
  dateOperation: string;
  mntCheque: number;
  mntReclame: string;
  agence: string;
  ribBenef: string;
  nomBenef: string;
  dateEmission: string;
  Certfie: string;
  status: string;
  
}

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent{
  


}
