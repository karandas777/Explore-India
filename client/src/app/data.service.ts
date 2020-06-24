import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  env = environment; 

  constructor(private http:HttpClient) { }

  getFun(method,headers){
    return this.http.get(this.env.apiurl+method,headers)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  postFun(method,form,headers){
    return this.http.post(this.env.apiurl+method,form,headers)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }  

}
