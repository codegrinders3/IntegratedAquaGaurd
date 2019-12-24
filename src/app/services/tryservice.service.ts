import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../data/customer';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()

export class TryService {
    customUrl = "http://localhost:8080/customer/";
    search = new URLSearchParams();
    constructor(private http: HttpClient) { }
    
    getAllCustomers2(url, requestBody): Observable<Customer[]> {
      console.log('hereee' + url);
      return this.http.get<Customer[]>(this.customUrl+ url, {params: {payload: requestBody}})
      .pipe(retry(1), catchError(this.handleError)
      )
    }

    // HttpClient API post() method => Create employee
  getFilteredData(url, requestBody): Observable<Customer[]> {
      //console.log();
      return this.http.get<Customer[]>(this.customUrl+ url, {params: {payload: requestBody}})
      .pipe(retry(1), catchError(this.handleError)
      )
  }  

  getAllCustomers(): Observable<any> {
    return this.http.get<Customer>(this.customUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCustomer(): Observable<any> {
      return this.http.get(this.customUrl);
  }
  
  addCustomer(customer: String): Observable<any> {
    return this.http.post(this.customUrl+ 'addcustomer', customer, httpOptions)
    .pipe(retry(1), catchError(this.handleError)
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
}
