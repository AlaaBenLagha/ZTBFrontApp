    export class T24Cheque{

        constructor(
            public id: string,
            public codeVal: string,
            public codeRemettant: string,
            public dateOperation: string | Date,
            public mntCheque: number,
            public mntReclame: string,
            public mntRegulInt: string,
            public agence: string,
            public ribBenef: string,
            public nomBenef: string,
            public dateEmission: string,
            public situationBenef: string,
            public natureCmpt: string,
            public certifie: string,
            public statut: number,
            public inexploitableString: string,
            public opposition: string,
            public cloture: string,
            public visDeForme: number[],
            public inexpoitable: number[],
            public ftDesionPai: string,
            public valConsultee: string,
            public dateImgNew: string,
            public numCpt: string,
            public ribTireur: string,
            public notifChq: boolean,
            public numChq: string,
            public viewed: boolean,
            public isSelected: boolean,
            public cmc7:string,
            
        ){}

        

    }



