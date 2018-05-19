import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor() { }

  structBody(data: any):string{
    let _params:string = "";
    for (let key in data) _params += `&${key}=${data[key]}`;
    return _params;
  }

  structHeaders(): object {

    const httpOptions:object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

    return httpOptions;
  }

}
