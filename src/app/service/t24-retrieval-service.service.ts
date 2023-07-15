import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { T24Cheque } from '../domain/models/t24-cheque';






@Injectable({
  providedIn: 'root'
})
export class T24RetrievalServiceService {

  chequeDeselected = new Subject<T24Cheque>();
  private apiUrl = 'http://t24-data-service.info'; // Replace with your Ingress URL`

  // private socket$: WebSocketSubject<T24Cheque>;

  constructor(private http:HttpClient) { 
   
  }

  

  



  public getAllT24Cheques(): Observable<T24Cheque[]> {
    // Make an HTTP GET request to fetch all T24Cheques
    // return this.http.get<T24Cheque[]>('http://127.0.0.1:63007/api/cheques/all');
    return this.http.get<T24Cheque[]>(`${this.apiUrl}/api/cheques/all`);
  }

  public getDecisionReasons(): Observable<{ [key: string]: { [key: string]: string } }> {
    // Make an HTTP GET request to fetch decision reasons
    return this.http.get<{ [key: string]: { [key: string]: string } }>(`${this.apiUrl}/api/cheques/decisionReasons`);
    // return this.http.get<{ [key: string]: { [key: string]: string } }>('http://localhost:8080/api/cheques/decisionReasons');
  }




  public setSelected(id: string, isSelected: boolean): Observable<T24Cheque> {
    return this.http.put<T24Cheque>(`${this.apiUrl}/api/cheques/select/${id}`, { isSelected: isSelected });
    // return this.http.put<T24Cheque>(`http://localhost:8080/api/cheques/select/${id}`, { isSelected: isSelected });
  }
  
  public getSignaturePaths(id: string): Observable<string[]> {
    // return this.http.get<string[]>(`http://localhost:8080/api/cheques/${id}/signatures`);
    return this.http.get<string[]>(`${this.apiUrl}/api/cheques/${id}/signatures`); 
}

  



  public saveCheque(cheque: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/cheques/saveViseInex`, cheque);
    // return this.http.post('http://localhost:8080/api/cheques/saveViseInex', cheque);
  }

 

//   public sendImageUrls(urls: string[]): Observable<any> {
//     return this.http.post<any>(`http://localhost:8080/api/image-urls`, urls).pipe(
//       tap((response: any) => {
//         console.log(response);
//         // Traitement de la réponse ici si nécessaire
//       })
//     );
// }



  




  
}
