import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import * as CKEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxUiLoaderService } from "ngx-ui-loader";
import {FileUploader} from 'ng2-file-upload';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imagepath="../../assets/uploads/";

  public uploader : FileUploader = new FileUploader ({url:"http://localhost:3000/api/upload-file" , itemAlias:"img"})

  public Editor = CKEditor;


  catlist:any=[];
  postlist:any=[];
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
  sortID="";
  query={};
  
  
  invalid:boolean=false;
  alert="";


displayedColumns: string[] = ['_id', 'cat_id', 'cat_name', 'title','summary','post_image','pageurl','meta_title','meta_desc','actions'];
dataSource;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



    constructor(private d: DataService, private ngxService:NgxUiLoaderService) { }
  
    ngOnInit() {
      this.getPost();
      this.getCategory();
      
      this.uploader.onAfterAddingFile = (file) =>{file.withCredentials=false};
      // this.uploader.onCompleteItem =(item:any,res:any)=>{
      //   console.log(res);
      // }

    }


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
      this.ngxService.start();
      this.d.postFun(method,{_id:this.formdata.cat_id},{headers})
      .then((data)=>{
        that.ngxService.stop();
        var catdetails = data['message'];
        that.formdata.cat_name=catdetails.name;
      })
    }

    getPost(){
      let headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      headers = headers.set('auth',localStorage.getItem('token'));
  
      const method = '/select-post'
      const that= this;
      this.ngxService.start();
      this.d.getFun(method,{headers})
      .then((res)=>{
        that.ngxService.stop();
        const data = res['message'];
        that.postlist=data;
        that.dataSource= new MatTableDataSource<tabledef>(this.postlist);
        that.dataSource.paginator = this.paginator;
      })
    }
  
  
    edit(form){
      this.formdata=form;
    }
  
  
  
  
    update(){
      if(this.formdata.cat_id==="" || this.formdata.cat_name=== "" || this.formdata.title === "" || this.formdata.summary ===""||this.formdata.post_image==="" || this.formdata.pageurl==="" || this.formdata.meta_title==="" || this.formdata.meta_desc ===""){
        this.invalid=true;
        this.alert="Please fill all the details !!!";
      }
      else{
        let headers = new HttpHeaders;
        headers = headers.set('content-type','application/json');
        headers = headers.set('auth',localStorage.getItem('token'));
        const method = "/edit-post"
        const that =this;
        this.ngxService.start();
        this.d.postFun(method,this.formdata,{headers})
        .then((res)=>{
          that.getPost();
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
        })
      }
    }

    modalClose(){
      this.uploader.uploadAll();
    }
  
    delete(id){
      var headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      headers = headers.set('auth',localStorage.getItem('token'));
      const method = '/remove-post';
      const that =this;
      this.ngxService.start();
      this.d.postFun(method,{_id:id},{headers})
      .then((res)=>{
        that.getPost();
        that.ngxService.stop();
      })
    }
  
    sortPost(){
      var headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      headers = headers.set('auth',localStorage.getItem('token'));
      const method = '/sort-post';
      const that = this;
      if(this.sortID ===""){
        this.query={};
      }
      else{
        this.query ={cat_id:this.sortID}
      }
      this.ngxService.start();
      this.d.postFun(method,{query:this.query},{headers})
      .then((res)=>{
        const data = res['message'];
        that.postlist=data;
        that.ngxService.stop();
        that.dataSource= new MatTableDataSource<tabledef>(this.postlist);
        that.dataSource.paginator = this.paginator;
      })
    }



}

export interface tabledef {
  _id:string,
  cat_id:string,
  cat_name:string,
  title:string,
  summary:string,
  post_image:string,
  pageurl:string,
  meta_title:string,
  meta_desc:string
}