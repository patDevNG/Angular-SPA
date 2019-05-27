import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";




//external api
const base_url= 'https://jsonplaceholder.typicode.com/'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  getPosts() {
    return this._http.get<any>(`${base_url}posts?_limit=1`); 
  }

  getMorePost() {
    return this._http.get<any>(`${base_url}posts?_limit=3`); 
  }
}
