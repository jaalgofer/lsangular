import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ModConfig } from "../models/class/mod-config";
import { Login } from "../models/interface/login";
import { RequestService } from "./request.service";
import { Session } from "../models/class/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  _host: string;
  ModConfig;
  constructor(
    private httpClient: HttpClient,
    private RequestService$: RequestService, 
    private Session: Session,
  ) {
    this.ModConfig = new ModConfig();
    this._host = `${this.ModConfig.host}/api-dace/request/login.php?`;
   }

  login(data: Login): Observable<any> {
    const _urlParams = this.RequestService$.structParams({'action': 2});
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);
    return this.httpClient.post(this._host + _urlParams, _params, _httpOptions);
  }

  logout(): Observable<any> {

    const _urlParams = this.RequestService$.structParams({ 'action': 4 });
    const _httpOptions = this.RequestService$.structHeaders();
    console.log(_urlParams);
    return this.httpClient.post(this._host + _urlParams, {}, _httpOptions);
  }

}
