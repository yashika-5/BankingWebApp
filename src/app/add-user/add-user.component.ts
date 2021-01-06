import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addCustomer :FormGroup ;
  constructor() { 

    this.addCustomer = new FormGroup({
      customerId : new FormControl(null),
      customerName : new FormControl(null),
      age : new FormControl(null),
      phoneNo : new FormControl(null),
      email : new FormControl(null),
      accountNo : new FormControl(null),
      currentBalance : new FormControl(null),
      address : new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  addCust(){
    
  }
}
