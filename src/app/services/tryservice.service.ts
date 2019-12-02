import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../data/customer';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()

export class TryService {
    customUrl = "http://localhost:8080/customer/";

    constructor(private http: HttpClient) { }
    
    // HttpClient API post() method => Create employee
    getTest(url, requestBody): Observable<Customer[]> {
      //console.log();
      return this.http.post<Customer[]>(this.customUrl+ url, requestBody)
      .pipe(retry(1), catchError(this.handleError)
      )
  }  

  getAllCustomers(): Observable<any> {
    return this.http.post<Customer>(this.customUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

  getCustomer(): Observable<any> {
      return this.http.get(this.customUrl);
  }
}
