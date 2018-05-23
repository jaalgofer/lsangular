import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Docentes } from "../models/interface/docentes";
import { RequestService } from "./request.service";
import { ModConfig } from "../models/class/mod-config";
@Injectable({
  providedIn: 'root'
})

export class DocenteService {

  _host:string;
  private ModConfig;
  constructor(
    private HttpClient: HttpClient,
    private RequestService$: RequestService,
  ) { 
    this.ModConfig = new ModConfig();

    this._host = `${this.ModConfig.host}/api-ls/controllers/helpers/CargarDatos.php`;
  }

  viewAllDocente(): Observable<any> {

    const data = { 'tipo': 1, 'datos': ''};

    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this._host, _params, _httpOptions);
  }

  viewIdDocente(data: Docentes): Observable<any> {

    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this._host, _params, _httpOptions);
  }

  createDocente(data: Docentes): Observable<any>{
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this._host, _params, _httpOptions);
  }

  updateDocente(data: Docentes): Observable<any> {
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this._host, _params, _httpOptions);
  }

  deleteDocente(data: Docentes): Observable<any> {
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this._host, _params, _httpOptions);
  }


}
