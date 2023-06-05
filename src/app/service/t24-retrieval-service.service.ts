import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { T24Cheque } from '../domain/models/t24-cheque';




@Injectable({
  providedIn: 'root'
})
export class T24RetrievalServiceService {

  chequeDeselected = new Subject<T24Cheque>();


  // private socket$: WebSocketSubject<T24Cheque>;

  constructor(private http:HttpClient) { 
   
  }


  

  



  public getAllT24Cheques(): Observable<T24Cheque[]> {
    // Make an HTTP GET request to fetch all T24Cheques
    return this.http.get<T24Cheque[]>('http://localhost:8080/api/cheques/all');
  }

  public getDecisionReasons(): Observable<{ [key: string]: { [key: string]: string } }> {
    // Make an HTTP GET request to fetch decision reasons
    return this.http.get<{ [key: string]: { [key: string]: string } }>('http://localhost:8080/api/cheques/decisionReasons');
  }




  public setSelected(id: string, isSelected: boolean): Observable<T24Cheque> {
    return this.http.put<T24Cheque>(`http://localhost:8080/api/cheques/select/${id}`, { isSelected: isSelected });
  }
  
  public getSignaturePaths(id: string): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8080/api/cheques/${id}/signatures`);

    
}



  
}
