import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviseService {

  constructor(private http:HttpClient) { }
  getdata(){
     return this.http.get('http://localhost:3000/lable');
  }
  getuserdata(){
    return this.http.get('http://localhost:3000/Builder');
  }
}
