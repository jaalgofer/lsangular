import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Docentes } from "../models/interface/docentes";
import { RequestService } from "./request.service";

@Injectable({
  providedIn: 'root'
})

export class DocenteService {

  baseURL: 'http://localhost:8181/api-ls/controllers/helpers/CargarDatos.php';

  constructor(private HttpClient: HttpClient, private RequestService$: RequestService) { 
  }

  viewAllDocente(): Observable<any> {

    const data = { 'tipo': 1, 'datos': ''};

    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this.baseURL, _params, _httpOptions);
  }

  viewIdDocente(data: Docentes): Observable<any> {

    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this.baseURL, _params, _httpOptions);
  }

  createDocente(data: Docentes): Observable<any>{
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this.baseURL, _params, _httpOptions);
  }

  updateDocente(data: Docentes): Observable<any> {
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this.baseURL, _params, _httpOptions);
  }

  deleteDocente(data: Docentes): Observable<any> {
    const _httpOptions = this.RequestService$.structHeaders();
    const _params = this.RequestService$.structBody(data);

    return this.HttpClient.post(this.baseURL, _params, _httpOptions);
  }


}
