import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
 { path : "home", component : HomeComponent  },
 { path : "users", component : UsersComponent  },
 { path : "addcustomer", component : AddUserComponent},
 { path : "transaction/:senderId" , component : TransactionComponent},
 { path : "transaction-successful/:senderId", component : TransactionListComponent},
 { path : "transaction-lists", component : TransactionListComponent},
 {path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
