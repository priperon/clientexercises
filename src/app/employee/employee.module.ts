import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeHomeComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule
  ]
})
export class EmployeeModule { }
