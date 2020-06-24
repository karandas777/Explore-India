import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  env = environment; 

  constructor(private http:HttpClient) { }

  getFun(method){
    return this.http.get(this.env.apiurl+method)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  postFun(method,form){
    return this.http.post(this.env.apiurl+method,form)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }  

}
