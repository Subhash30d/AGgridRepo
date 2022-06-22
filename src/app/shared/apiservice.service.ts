import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  constructor(private httpclient: HttpClient) { }

  

  getuserdata(){
    let url="https://reqres.in/api/users?page=1"
    return this.httpclient.get(url)
  }
}
