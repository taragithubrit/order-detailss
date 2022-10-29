import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(  private http:HttpClient) { }

  login(data:any):Observable<any>{
     return this.http.post('http://13.76.214.165:8001/api/login',data);
  }
}
