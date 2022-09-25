import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from './employee';
@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    resourceURL: string;
    status: string;
    constructor(public http: HttpClient) {
        this.resourceURL = `${BASEURL}employees`;
        this.status = '';
    } // constructor
    /**
    * Retrieves the employeee JSON, then returns the array to a subscriber
    * we're temporarily using an any type (typically a bad idea) because the Spring Boot
    * repository returns all the data in an "embedded" property
    */
    get(): Observable<Employee[]> {
        return this.http
            .get<Employee[]>(this.resourceURL)
            .pipe(retry(1), catchError(this.handleError));
    } // load
    /**
    * Update an employee on the server using http put, server returns
    * updated employee, then return it as Observable to caller
    */
    update(employee: Employee): Observable<Employee> {
        return this.http
            .put<Employee>(`${this.resourceURL}`, employee)
            .pipe(retry(1), catchError(this.handleError));
    } // update
    /**
* add an employee on the server via POST, return Observable
*/
    add(employee: Employee): Observable<Employee> {
        employee.id = 0;
        return this.http
            .post<Employee>(this.resourceURL, employee)
            .pipe(retry(1), catchError(this.handleError));
    } // add
    /**
* delete an employee on the server, return Observable
*/
    delete(id: number): Observable<number> {
        return this.http
            .delete<number>(`${this.resourceURL}/${id}`)
            .pipe(retry(1), catchError(this.handleError));
    } // delete
    // Error handling
    handleError(error: any) {
        let errorMessage = '';
        error.error instanceof ErrorEvent
            ? // Get client-side error
            (errorMessage = error.error.message)
            : // Get server-side error
            (errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`);
        window.alert(errorMessage); // probably should console.log when going into production
        return throwError(() => errorMessage);
    }
} // EmployeeService
