import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from "../models/interface/login";
import { RequestService } from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://localhost:8181/api-dace/request/login.php?action=2';

  constructor(public httpClient: HttpClient, private RequestService$: RequestService) { }

  loginPost$(data: Login): Observable<any> {
    
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.httpClient.post(this.baseURL, _params, _httpOptions);
  }

}
