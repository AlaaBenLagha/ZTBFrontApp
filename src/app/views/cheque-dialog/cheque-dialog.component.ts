import { Component,ChangeDetectorRef,HostListener } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { T24Cheque} from '../../domain/models/t24-cheque';
import { T24RetrievalServiceService } from 'src/app/service/t24-retrieval-service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-cheque-dialog',
  templateUrl: './cheque-dialog.component.html',
  styleUrls: ['./cheque-dialog.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ChequeDialogComponent {

  
  chequeDialog2: boolean = false;
  formattedMntCheque!: string | null;
  notitle: string = "";
  validationTitle: string = "Validation";

  cardTitle: string = "Content";
  cardTitleColor: string = 'red'; // color for cardTitle

  decisionReasons: { [key: string]: { [key: string]: string } } = {};
  chequeDialog!: boolean;
  signaturePaths: string[] = [];
  submitted!: boolean;
  cheque!: T24Cheque;

  constructor(private service:T24RetrievalServiceService,private messageService: MessageService,private sanitizer: DomSanitizer,private currencyPipe: CurrencyPipe ,private cdr: ChangeDetectorRef,) {
        
  }


  
  ngOnInit() {
    this.service.getDecisionReasons().subscribe(decisionReasons => {
      this.decisionReasons = decisionReasons;
    });
  }

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
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
        false, // isViewed
        false, // isSelected
        '', // CMC7
    );
    this.submitted = false;
    this.chequeDialog = true;
}


editCheque(cheque: T24Cheque) {
  this.cheque = { ...cheque };
  this.formattedMntCheque = this.formatChequeMnt(this.cheque.mntCheque);
  this.chequeDialog = true;
  this.toggleDialog2(cheque);
  this.messageService.add({
      severity:'info', 
      summary:'Information', 
      detail: `Processing cheque with ID: ${this.cheque.id}` // Displaying cheque id in the toaster
  });
  
  
}

toggleDialog2(cheque: any): void {
  // open and close imaages dialog
  if (this.chequeDialog2) {
    this.chequeDialog2 = false;
  } else {
    this.show(cheque);
  }
}

show(cheque: T24Cheque) {
  this.chequeDialog2 = true;
  this.fetchSignaturePaths(cheque);
  
}






@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) { 
  if(event.key === 'Escape'){
    this.hideDialog(this.cheque);
  }
}

 
    

hideDialog(cheque: T24Cheque) {
  this.service.setSelected(cheque.id, false).subscribe(
    () => {
      this.cheque.isSelected = false;
      this.chequeDialog = false;
      if (this.chequeDialog === false) {
        this.chequeDialog2 = false;  // only hide the second dialog if the first dialog is being closed
      }
      this.submitted = false;
       // Emit the event of switch state
       this.service.chequeDeselected.next(this.cheque);
    },
  );

  this.cdr.detectChanges();  // Trigger change detection
}


fetchSignaturePaths(cheque: T24Cheque) {
  this.service.getSignaturePaths(cheque.id).subscribe(paths => {
      this.signaturePaths = paths.map(path => {
          let fileName = path.substring(path.lastIndexOf("/"));
          return `http://localhost:3000/signature-images${fileName}`;
      });
  });
}


formatChequeMnt(chequeMnt: number): string {
  let formattedChequeMnt = '';
  if (chequeMnt) {
    const currencyFormat = this.currencyPipe.transform(chequeMnt, 'TND', 'symbol', '1.2-2') || '';
    formattedChequeMnt = `${currencyFormat.replace('TND', '')} TND`;
  } else {
    formattedChequeMnt = 'N/A';
  }
  return formattedChequeMnt.trim();
}



getStyledCardTitle() {
  return `<span style="color: red">${this.cardTitle}</span>`;
}








// onScroll(event: WheelEvent) {
//     console.log('Scroll event triggered');
//     event.preventDefault();
//     let scale = 1; // this should be stored in a field of the component
//     const factor = 0.1; // adjust this to control how much zoom happens per scroll
//     if (event.deltaY < 0) {
//         // Scrolling up, increase scale
//         scale *= (1 + factor);
//     } else {
//         // Scrolling down, decrease scale
//         scale *= (1 - factor);
//     }
//     const dialogElement = document.getElementById('dialog2');
//     if (dialogElement) {
//         dialogElement.style.transform = `scale(${scale})`;
//     }
// }





}
