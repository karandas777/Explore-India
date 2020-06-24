import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as CKEditor from "@ckeditor/ckeditor5-build-classic";
import { NgxUiLoaderService } from "ngx-ui-loader";
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-insertpost',
  templateUrl: './insertpost.component.html',
  styleUrls: ['./insertpost.component.css']
})
export class InsertpostComponent implements OnInit {

  public uploader : FileUploader = new FileUploader ({url:"http://localhost:3000/api/upload-file" , itemAlias:"img"})
  
  fileToUpload: File = null;
  
  public Editor = CKEditor;

  formdata:any={
    cat_id:"",
    cat_name:"",
    title:"",
    summary:"",
    post_image:"",
    pageurl:"",
    meta_title:"",
    meta_desc:""
  };


  invalid:boolean=false;
  catlist:any=[];
  constructor(private d:DataService, private r:Router, private ngxService:NgxUiLoaderService) { }

  ngOnInit() {
    this.getCategory();
    this.uploader.onAfterAddingFile = (file) =>{file.withCredentials=false};
    // this.uploader.onCompleteItem=(item:any,response:any, status: any, headers: any)=>{
    //   this.formdata.post_image=response;
    // };
  }

  // upload(){
  //   this.uploader.uploadAll();
  // }

  getImageName(img){
    this.formdata.post_image=img.target.files[0].name;
  }


  getCategory(){
    let headers = new HttpHeaders;
    headers = headers.set('content-type','application/json');
    headers = headers.set('auth',localStorage.getItem('token'));

    const method = '/select-category'
    const that= this;
    this.ngxService.start();
    this.d.getFun(method,{headers})
    .then((res)=>{
      that.ngxService.stop();
      const data = res['message'];
      that.catlist=data;
    })
  }

  getCatname(){
    let headers = new HttpHeaders;
    headers = headers.set('content-type','application/json');
    headers = headers.set('auth',localStorage.getItem('token'));

    const method = '/get-category-details'
    const that= this;
    this.d.postFun(method,{_id:this.formdata.cat_id},{headers})
    .then((data)=>{
      var catdetails = data['message'];
      that.formdata.cat_name=catdetails.name;
    })
  }

 
  insert(){
    if(this.formdata.cat_id==="" || this.formdata.cat_name=== "" || this.formdata.title === ""||this.formdata.post_image=="" || this.formdata.summary ==="" || this.formdata.pageurl==="" || this.formdata.meta_title==="" || this.formdata.meta_desc ===""){
      this.invalid=true;
    }
    else{
      var headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      headers = headers.set('auth',localStorage.getItem('token'));
      const method ="/insert-post"
      const that =this;
      this.ngxService.start();
      this.d.postFun(method,this.formdata,{headers})
      .then((res)=>{
      that.uploader.uploadAll();
      that.ngxService.stop();
      that.invalid=false;
      that.formdata={
        cat_id:"",
        cat_name:"",
        title:"",
        summary:"",
        post_image:"",
        pageurl:"",
        meta_title:"",
        meta_desc:""
      };
      that.r.navigateByUrl('/home/view-post');
      })
    }
  }






}
