import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transList :any[];
  transId: any;
  listOrNot : boolean = false;
  constructor(private transactionService: TransactionService, private activateRoute : ActivatedRoute) { 
    this.transList = [];
  }
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getTransaction().subscribe(data =>{
      this.transList = data;
      console.log(this.transList);
      if(this.activateRoute.snapshot.params['senderId']){
        this.transId = this.activateRoute.snapshot.params['senderId'];
        console.log('asdasd');
        this.transList = this.transList.filter(e=>e.customerId==this.transId)
      }
      console.log(this.transList);

    });
  }
  a(){
    this.transList.forEach((a,i)=>{
      this.transactionService.delete(44).subscribe(data=>{
        console.log(data);
        
      })
      
    })
  }
}
