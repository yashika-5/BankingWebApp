import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient : HttpClient) {
   }

   apiPrefix : string = "http://localhost:57351";

   postTransaction(transaction : any){
    return this.httpClient.post<any>(this.apiPrefix + "/api/transactions/",transaction);
  }

  getTransaction()  : Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiPrefix + "/api/transactions");                                                                                                                                                                                          
  }
  getTransactions(transId : number){
    return this.httpClient.get<any>(this.apiPrefix + "/api/transactions/" + transId);
  }
  delete(a:any) {
    return this.httpClient.delete<any>(this.apiPrefix + "/api/transactions/" + a);
  }
}
