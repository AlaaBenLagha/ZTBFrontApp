export class T24ChequeProcessor {
    processStatus: string;
    transactionId: string;
    id: string;
    visDeForme: number[];
    inexploitable: number[];

    constructor(processStatus: string = '', transactionId: string = '', id: string = '', visDeForme: number[] = [], inexploitable: number[] = []) {
        this.processStatus = processStatus;
        this.transactionId = transactionId;
        this.id = id;
        this.visDeForme = visDeForme;
        this.inexploitable = inexploitable;
    }
}
