import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any={
    username:"",
    password:""
  };
  invalid = false;
  alert="";
  constructor(private d:DataService, private r:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.form.username==="" || this.form.password=== ""){
      this.alert="* Please fill all Details *"
      this.invalid=true;
    }
    else{
      var headers= new HttpHeaders;
      headers = headers.set('content-type','application/json');
      const method = '/find-user';
      const that = this;
      this.d.postFun(method,this.form,{headers})
      .then((res)=>{
      const status = res['status'];
      if(status === 'OK'){
        this.invalid=false;
        localStorage.setItem('user',that.form.username);
        localStorage.setItem('token',res['token']);
        that.form={
          username:"",
          password:""
        };
        that.r.navigateByUrl('/home/view-category');
      }
      else{
        this.alert="User not found !!"
        this.invalid=true;
      }
      })
    }
    
  }
}
