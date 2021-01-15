import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'}) };

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  apiPrefix : string = "http://localhost:57351";

  //Post the data to Customer Table
  postCustomer(customer : any){
    return this.httpClient.post<any>(this.apiPrefix + "/api/customers/",customer);
  }

  // Get the data of Customer
  getCustomer() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiPrefix + "/api/customers");
  }
  getCustomers(custId : number){
    return this.httpClient.get<any>(this.apiPrefix + "/api/customers/" + custId);
  }
  updateUser(customer : any){
    return this.httpClient.put<any>(this.apiPrefix + "/api/customers/"+customer.customerId,customer);
  }
}
