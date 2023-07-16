import { T24Cheque} from '../../domain/models/t24-cheque';

export class TransactionResponse {
    cheque: T24Cheque;
    transactionId: string;
    response: string;

    constructor(cheque: T24Cheque = new T24Cheque(), transactionId: string = '', response: string = '') {
        this.cheque = cheque;
        this.transactionId = transactionId;
        this.response = response;
    }
}
