import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
 { path : "home", component : HomeComponent  },
 { path : "users", component : UsersComponent  },
 { path : "addcustomer", component : AddUserComponent},
 {path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
