import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  moneyForm : FormGroup;
  senderId : any;
  senderData : any;
  transUser : any;
  receiverSide : any;
  public receiversList : any[];
  

  constructor(private customerService : CustomerService, private activateRoute : ActivatedRoute, private transactionService : TransactionService, private router : Router) { 
    this.receiversList = [];
    this.moneyForm = new FormGroup({
      customerId : new FormControl(),
      receiverName : new FormControl(),
      accountNo : new FormControl(),
      amount : new FormControl()
    });
    this.senderId = this.activateRoute.snapshot.params['senderId'];
    this.getSender(this.senderId);
    this.getReceivers();
  }

  ngOnInit(): void {
    // console.log(this.activateRoute.snapshot.params['customerId']);
    // console.log(this.senderId);
  }

  getSender(customerId : any){
    this.customerService.getCustomers(customerId).subscribe(customer =>{
      this.senderData = customer;
      this.moneyForm.patchValue({
        accountNo : this.senderData.accountNo,
        customerId: this.senderData.customerId
      });
    })
  }
  getReceivers() {
    this.customerService.getCustomer().subscribe(receiversList=>{
      this.receiversList = receiversList.filter(e=>e.customerId != this.senderId)
    });
  }  

  transferMoney(){
    if(this.moneyForm.value['receiverName']){
      let transData :any;
      let receiver :any;
       // filter receiver from recievers list 
      receiver = this.receiversList.filter(e=>e.customerName==this.moneyForm.value['receiverName'])[0]

      transData = this.moneyForm.value;
      transData['senderName'] = this.senderData.customerName;
      if (this.senderData.currentBalance >= transData.amount) { //check if sender has enough balance 
        // deduct money from sender 
        this.senderData['currentBalance'] = this.senderData['currentBalance'] - transData['amount']
        this.customerService.updateUser(this.senderData).subscribe(data=>{
          alert('Your money has been deducted');

          // add money to reciever 
          receiver['currentBalance'] = receiver['currentBalance'] + transData['amount'];
          this.customerService.updateUser(receiver).subscribe(data=>{
            alert('Receiver has received the money');
          
            // Transaction created
            this.transactionService.postTransaction(this.moneyForm.value).subscribe((data)=>{
              alert('Transaction Created');
              this.router.navigate(['/transaction-successful',data.customerId]);
            });
          });
        });
      } else {
        alert('Not Enough balance');
      }
    } else {
        alert('Receiver Name not selected.');
      }
    }
}
