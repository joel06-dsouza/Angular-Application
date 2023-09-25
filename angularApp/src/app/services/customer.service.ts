import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { Customer } from "../customer/customer.model";

@Injectable({providedIn: 'root'})

export class CustomerRestService {
    apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    getCustomers() : Observable<Customer[]> {
        return this.http.get<Customer[]>(this.apiURL + '/customers').pipe(retry(1), catchError(this.handleError))
    }

    getCustomer(id: any) : Observable<Customer> {
        return this.http.get<Customer>(this.apiURL+'/customers/'+id).pipe(retry(1), catchError(this.handleError))
    }

    createCustomers(customer: any) : Observable<Customer> {
        return this.http.post<Customer>(this.apiURL + '/customers', JSON.stringify(customer), this.httpOptions).pipe(retry(1), catchError(this.handleError))
    }

    updateCustomers(id:any, customer: any) : Observable<Customer>{
        return this.http.put<Customer>(this.apiURL+'/customers/'+id, JSON.stringify(customer), this.httpOptions).pipe(retry(1), catchError(this.handleError))
    }

    deleteCustomer(id:any){
        return this.http
        .delete<Customer>(this.apiURL + '/customers/' + id,this.httpOptions).pipe(retry(1),catchError(this.handleError));
    }

    handleError(handleError: any) {
        let errorMessage = '';

        if(handleError.error instanceof ErrorEvent) {
            errorMessage = handleError.error.message;
        }
        else {
            errorMessage = `Error Code: ${handleError.status}\nMessage: ${handleError.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}