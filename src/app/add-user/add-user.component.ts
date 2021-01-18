import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
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
      customerName : new FormControl(null,Validators.required),
      age : new FormControl(null,Validators.required),
      phoneNo : new FormControl(' ',[ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]),
      email : new FormControl(null,Validators.required),
      accountNo : new FormControl(null,Validators.required),
      currentBalance : new FormControl(null,Validators.required),
      address : new FormControl('Jaipur',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  addCust(){
    if( this.addCustomer.valid == true){
      this.customerService.postCustomer(this.addCustomer.value).subscribe(data=>{
        console.log(data);
        alert("Customer has been added successfully.")
        this.addCustomer.reset();
      });
    }
  }
}
