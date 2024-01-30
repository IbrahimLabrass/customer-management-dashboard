import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customers'; // My api url

  constructor(private http: HttpClient) { }

  // get data
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
// add new customer to the seerver
addCustomer(newCustomer: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}`, newCustomer);
}

// update an exiting customer on the seerver

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, customer);
  }
// delete customrr

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
