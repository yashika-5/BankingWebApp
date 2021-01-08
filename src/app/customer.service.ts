import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'}) };

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  apiPrefix : string = "http://localhost:55125";

  //Post the data to Customer Table
  postCustomer(customer : any){
    return this.httpClient.post<any>(this.apiPrefix + "/api/customers",customer);
  }

  // Get the data of Customer
  getCustomer() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiPrefix + "/api//customers");
  }
}
