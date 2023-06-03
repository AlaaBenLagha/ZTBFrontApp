import { Component, OnInit } from '@angular/core';

import { T24RetrievalServiceService } from 'src/app/service/t24-retrieval-service.service';

@Component({
  selector: 'app-t24-data-retrieval',
  templateUrl: './t24-data-retrieval.component.html',
  styleUrls: ['./t24-data-retrieval.component.scss']
})
export class T24DataRetrievalComponent implements OnInit{

    t24cheques: any;
    message: any;



  constructor(private service:T24RetrievalServiceService ){ }


  ngOnInit() {
    let res=this.service.getAllT24Cheques();
    res.subscribe((data)=>this.t24cheques=data);
  }

}
