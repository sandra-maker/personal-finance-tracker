import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl = "http://localhost:5000/api/transactions";

  constructor(private http: HttpClient) {}

  getTransactions(){
    return this.http.get(this.apiUrl);
  }

  addTransaction(data:any){
    return this.http.post(this.apiUrl, data);
  }
}