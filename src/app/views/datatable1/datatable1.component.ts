import { Component,OnInit, ViewChild} from '@angular/core';
import { T24Cheque} from '../../domain/models/t24-cheque';
import { T24RetrievalServiceService } from 'src/app/service/t24-retrieval-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { ChequeDialogComponent } from '../cheque-dialog/cheque-dialog.component';






@Component({
  selector: 'app-datatable1',
  templateUrl: './datatable1.component.html',
  styleUrls: ['./datatable1.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class Datatable1Component implements OnInit{



    cheques!: T24Cheque[];
   
  
    selectedCheques!: T24Cheque[];
  
    certifies!: any[];
  
    statuses!: any[];

    
    chequeDialog!: boolean;


    cheque!: T24Cheque;
    
    submitted!: boolean;
  
    loading!: boolean ;
  
    activityValues: number[] = [0, 100];

    constructor(private service:T24RetrievalServiceService, private messageService: MessageService ) {
        
    }


    ngOnInit() {
        this.service.getAllT24Cheques().subscribe(
            (cheques) => {
              this.cheques = cheques;
              this.loading = false;
          
              this.cheques.forEach((cheque) => {
                if (cheque.dateOperation) {
                  cheque.dateOperation = new Date(cheque.dateOperation);
                }
              });
              this.messageService.add({severity:'success', summary:'Success Message', detail:'Cheques retrieved successfully.'});
            },
            (error: HttpErrorResponse) => {
              this.loading = false;
              if (error.error instanceof ErrorEvent) {
                //  client-side &&  network error occurred. Handle it accordingly.
                this.messageService.add({severity:'error', summary:'Network Error', detail:'Please check your network connection.'});
              } else {
                // The backend response 
                this.messageService.add({severity:'error', summary:'Error Message', detail:'Unable to retrieve cheques. Please try again later.'});
              }
            });
          

        this.certifies  = [
            { label: 'Certified', value: "YES" },
            { label: 'Non-Certified', value: "NO"}
        ];

        this.statuses = [
            { label: 'UP', value: 1 },
            { label: 'DOWNS', value: 2 }
        ];

      
    }

    @ViewChild(ChequeDialogComponent)
    chequeDialogComponent!: ChequeDialogComponent;
  

    getSeverity(statut: number): string {
        switch (statut) {
          case 1: return 'danger';
          case 2: return 'success';
          default: return 'default';
        }
      }
    
      getSeverity2(certifie: 'YES' | 'NO'): string {
        switch (certifie) {
          case 'YES': return 'danger';
          case 'NO': return 'success';
          default: return 'default';
        }
      }


    openNew() {
        this.cheque = new T24Cheque(
            '', // id
            '', // codeVal
            '', // codeRemettant
            '', // dateOperation
            0, // mntCheque
            '', // mntReclame
            '', // mntRegulInt
            '', // agence
            '', // ribBenef
            '', // nomBenef
            '', // dateEmission
            '', // situationBenef
            '', // natureCmpt
            '', // certifie
            0, // statut
            '', // inexploitableString
            '', // opposition
            '', // cloture
            [], // visDeForme
            [], // Inexploitable
            '', // ftDesionPai
            '', // valConsultee
            '', // dateImgNew
            '', // numCpt
            '', // ribTireur
            false, // notifChq
            '', // numChq
            false, //viewed
            false, //isSelected
            '', // CMC7
        );
        this.submitted = false;
        this.chequeDialog = true;
    
    }


    

  
    
    editCheque(cheque: T24Cheque) {
      this.service.setSelected(cheque.id, true).subscribe(
          () => {
              this.cheque = { ...cheque };
              this.cheque.isSelected = true;
              this.chequeDialog = true;
              this.messageService.add({
                  severity:'info', 
                  summary:'Information', 
                  detail: `Processing cheque with ID: ${this.cheque.id}` // Displaying cheque id in the toaster
              });
              this.chequeDialogComponent.editCheque(cheque);
          },
      );
  }
    
  

    hideDialog() {
        this.chequeDialog = false;
 
        this.submitted = false;
    }
    
}