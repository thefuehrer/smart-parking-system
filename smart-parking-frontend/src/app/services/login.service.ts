import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3999/api/smart-parking/';
  
  constructor(private http: HttpClient) { }

  doLogin(username: string, password: string){
    let url = this.baseUrl + 'login';
    return this.http.post(url,{username: username, password: password});
  }

  doRegister(user:any){
    let url = this.baseUrl + 'register';
    return this.http.post(url,user);
  }

  doAdminLogin(username: string, password: string){
    let url = this.baseUrl + 'admin/login';
    return this.http.post(url,{username: username, password: password});
  }

}
