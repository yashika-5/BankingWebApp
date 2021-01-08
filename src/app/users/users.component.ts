import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public customers : any[];
  constructor(private customerService: CustomerService) {
    this.customers = [];
   }


  ngOnInit(): void {
    this.getCust()
  }
  getCust() {
      this.customerService.getCustomer().subscribe(customers=>{
        console.log(customers),
        customers.forEach(customer => {
          this.customers.push(customer);
        });
      });
  }
}
