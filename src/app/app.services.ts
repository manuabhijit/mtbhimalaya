import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class MyServiceClass{
    constructor(private _http: Http){
    }
     someMethod(_url,data){
         return this._http.post(_url,data).map( res => res.json());
     }
}
