import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addCustomer :FormGroup ;
  constructor(private customerService: CustomerService) { 

    this.addCustomer = new FormGroup({
      customerName : new FormControl(null),
      age : new FormControl(null),
      phoneNo : new FormControl(null),
      email : new FormControl(null),
      accountNo : new FormControl(null),
      currentBalance : new FormControl(null),
      address : new FormControl('123123123sfazsfasdasdasd')
    })
  }

  ngOnInit(): void {
  }

  addCust(){
    if( this.addCustomer.valid == true){
      this.customerService.postCustomer(this.addCustomer.value).subscribe(data=>{
        console.log(data);
        
      });
    }
  }
}
