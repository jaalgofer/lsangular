import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Login } from "../models/interface/login";
import { RequestService } from "./request.service";
import { Session } from "../models/class/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseURL = 'http://localhost:8181/api-dace/request/login.php?';

  constructor(private httpClient: HttpClient,
    private RequestService$:
    RequestService, private Session: Session) { }

  login(data: Login): Observable<any> {
    const _urlParams = this.RequestService$.structParams({'action': 2});
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);
    return this.httpClient.post(this.baseURL + _urlParams, _params, _httpOptions);
  }

  logout(): Observable<any> {

    const _urlParams = this.RequestService$.structParams({ 'action': 4 });
    const _httpOptions = this.RequestService$.structHeaders();
    console.log(_urlParams);
    return this.httpClient.post(this.baseURL + _urlParams, {}, _httpOptions);
  }

}
