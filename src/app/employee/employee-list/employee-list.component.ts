import { Component, Input } from '@angular/core';
import { Employee } from '../employee';
@Component({
selector: 'app-employee-list',
template: `
<mat-list-item
*ngFor="let employee of employees"
layout="row"
class="pad-xs mat-title"
>
{{ employee.id }} - {{ employee.firstname }}, {{ employee.lastname }}
</mat-list-item>
`,
})
export class EmployeeListComponent {
@Input() employees?: Employee[];
} // EmployeeListComponent
