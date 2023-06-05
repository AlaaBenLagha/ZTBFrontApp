import { Component,OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { T24Cheque} from '../../domain/models/t24-cheque';
import { T24RetrievalServiceService } from 'src/app/service/t24-retrieval-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { ChequeDialogComponent } from '../cheque-dialog/cheque-dialog.component';
import { Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/service/websocket.service';








@Component({
  selector: 'app-datatable1',
  templateUrl: './datatable1.component.html',
  styleUrls: ['./datatable1.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class Datatable1Component implements OnInit, OnDestroy{

     
    private subs = new Subscription();
    cheques!: T24Cheque[];


    selectedCheques!: T24Cheque[];
    
     certifies!: any[];
    statuses!: any[];  
    chequeDialog!: boolean;
    cheque!: T24Cheque;   

    submitted!: boolean;

    loading!: boolean ;
    activityValues: number[] = [0, 100];

    constructor(
        private service:T24RetrievalServiceService, 
        private messageService: MessageService,
        private cdr: ChangeDetectorRef,
        private websocketService: WebsocketService,
   
       
      ) {}


      ngOnInit() {
        this.loading = true;
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
              this.messageService.add({severity:'error', summary:'Network Error', detail:'Please check your network connection.'});
            } else {
              this.messageService.add({severity:'error', summary:'Error Message', detail:'Unable to retrieve cheques. Please try again later.'});
            }
          }
        );
  
        this.certifies = [
          { label: 'Certified', value: "YES" },
          { label: 'Non-Certified', value: "NO"}
        ];
  
        this.statuses = [
          { label: 'UP', value: 1 },
          { label: 'DOWNS', value: 2 }
        ];
  
        this.subs.add(
          this.service.chequeDeselected.subscribe(
            (cheque: T24Cheque) => {
                const idx = this.cheques.findIndex(ch => ch.id === cheque.id);
                if (idx !== -1) {
                    this.cheques[idx] = { ...cheque };
                    this.cdr.detectChanges();  // Manually trigger change detection
                }
            }
          )
        );

        this.websocketService.getChequeSelected().subscribe(
          (cheque: T24Cheque) => {
              const idx = this.cheques.findIndex(ch => ch.id === cheque.id);
              if (idx !== -1) {
                  this.cheques[idx] = { ...cheque };
                  this.cdr.detectChanges();  // Manually trigger change detection
              }
          }
      );

        
  
   
      
    }

    


      ngOnDestroy(): void {
    this.subs.unsubscribe();
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
        (updatedCheque) => {
          const idx = this.cheques.findIndex(c => c.id === updatedCheque.id);
          if (idx > -1) {
            this.cheques[idx] = updatedCheque;
          }
          this.cheque = { ...updatedCheque };
          this.chequeDialog = true;
          this.messageService.add({
            severity:'info',
            summary:'Information',
            detail: `Processing cheque with ID: ${this.cheque.id}`
          });
          this.chequeDialogComponent.editCheque(updatedCheque);
        },
      );
    }
    
  

    hideDialog() {
        this.chequeDialog = false;
 
        this.submitted = false;
    }
    
}