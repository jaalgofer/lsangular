import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor() { }

  public structParams(data: any):object{
    return this.factoryParams(data);
  }

  public structBody(data: any):object{
    return this.factoryParams(data);
  }

  public structHeaders(): object {

    const httpOptions:object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

    return httpOptions;
  }

  private factoryParams(data: object):object{
    let _httpParams = new HttpParams();
    for (let key in data) {
      _httpParams = _httpParams.set(key, JSON.stringify(data[key]));
    }
    return _httpParams;

  }

}