import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from "./login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://localhost:8181/api-dace/request/login.php?action=2';

  constructor(public httpClient: HttpClient) { }

  loginPost$(data: Login): Observable<any>{
    let _params = "";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

    for(let key in data) _params += `&${key}=${data[key]}`;

    return this.httpClient.post<Login>(this.baseURL, _params, httpOptions);
  }

}
