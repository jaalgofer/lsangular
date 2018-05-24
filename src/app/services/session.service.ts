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

  ModConfig;
  private _URL: string;
  constructor(
    private httpClient: HttpClient,
    private RequestService$: RequestService, 
    private Session: Session,
  ) {
    this.ModConfig = new ModConfig();
    this._URL = this.ModConfig.host + this.ModConfig.default;
   }

  login(data: Login): Observable<any> {
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);
    return this.httpClient.post(this._URL + '/helpers/login.php', _params, _httpOptions);
  }

  logout(): Observable<any> {
    const _httpOptions = this.RequestService$.structHeaders();
    return this.httpClient.post(this._URL + '/helpers/logOut.php', {}, _httpOptions);
  }

}
