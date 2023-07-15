import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionResponse} from '../domain/models/TransactionResponse';
import { T24ChequeProcessor } from '../domain/models/T24ChequeProcessor';

@Injectable({
  providedIn: 'root'
})



export class T24ValidatorService {
  private apiUrl = 'http://t24-validator-service.info'; // Replace with your Ingress URL`
  constructor(private http:HttpClient) { }




  processCheque(id: string, processor: T24ChequeProcessor): Observable<TransactionResponse> {
    // You'll need to replace the URL with the actual URL of your T24ValidatorService
    return this.http.post<TransactionResponse>(`${this.apiUrl}/api/process/doProcess/${id}`, processor);
}


}
