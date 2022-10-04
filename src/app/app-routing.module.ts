import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { ExpenseHomeComponent } from '@app/expense/expense-home/expense-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Exercises - Home' },
  { path: 'employees', component: EmployeeHomeComponent, title: 'Exercises - Employees' },
  { path: '', component: HomeComponent, title: 'Exercises - Home' },
  { path: 'expenses', component: ExpenseHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
