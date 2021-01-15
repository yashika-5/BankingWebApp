import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {
  [x: string]: any;

  transactions : any[];
  transData : any;
  sub1: any;
  constructor(private transactionService : TransactionService, private activateRoute : ActivatedRoute) {
    this.transactions = [];
    this.sub1 = this.activateRoute.snapshot.params['transId'];
    this.getSingleTrans(this.sub1);

   }

  ngOnInit(): void {
    this.transactionSuccess();
  }
   
  transactionSuccess(){
    this.transactionService.getTransaction().subscribe(transactions=>{
      console.log(transactions);
      transactions.forEach(transaction => {
        this.transactions.push(transaction);
      });
    });

  }

}
