import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client, IMessage,Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { T24Cheque } from '../domain/models/t24-cheque';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private apiUrl = 'http://t24-data-service.info'; // Ingress URL`
    private client: Client;
    private chequeSelectedSubject = new Subject<T24Cheque>();

    constructor() {
       
        this.client = Stomp.over(new SockJS(`${this.apiUrl}/websocket-app`));
        this.client.onConnect = (frame) => {
            this.client.subscribe('/topic/cheque-selected', (message: IMessage) => {
                this.chequeSelectedSubject.next(JSON.parse(message.body));
            });
        };
        this.client.activate();
    }

    getChequeSelected(): Observable<T24Cheque> {
        return this.chequeSelectedSubject.asObservable();
    }
}
