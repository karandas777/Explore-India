import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
form:any={
  username:"",
  password:""
};
invalid = false;
alert="";
  constructor(private d:DataService,private r:Router) { }

  ngOnInit() {
  }

  signup(){
    if(this.form.username==="" || this.form.password=== ""){
      this.alert="* Please fill all Details *"
      this.invalid=true;
    }
    else{
      var headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      const method = '/insert-user';
      const that = this;
      this.d.postFun(method,this.form,{headers})
      .then((res)=>{
      const status = res['status'];
      if(status === 'OK'){
        this.invalid=false;
        that.form={
          username:"",
          password:""
        };
        that.r.navigateByUrl('/login');
      }
      else{
        this.alert="Failed to Create User !!"
        this.invalid=true;
      }
      })
    }
    
  }
}
