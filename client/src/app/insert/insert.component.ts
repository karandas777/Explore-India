import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  public uploader : FileUploader = new FileUploader ({url:"http://localhost:3000/api/upload-file" , itemAlias:"img"})
  
  fileToUpload: File = null;

  formdata:any={
    name:"",
    pageurl:"",
    image:"",
    meta_title:"",
    meta_desc:""
  };

  invalid:boolean=false;

  constructor(private d: DataService, private r:Router, private ngxService:NgxUiLoaderService) {
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) =>{file.withCredentials=false};
  }

  getImageName(img){
    this.formdata.image=img.target.files[0].name;
  }

  insert(){
    if(this.formdata.meta_title==="" || this.formdata.meta_desc=== "" || this.formdata.image==="" || this.formdata.name === "" || this.formdata.pageurl === ""){
      this.invalid=true;
    }
    else{
      var headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      headers = headers.set('auth',localStorage.getItem('token'));
      const method ="/insert-category"
      const that =this;
      this.ngxService.start();
      this.d.postFun(method,this.formdata,{headers})
      .then((res)=>{
      that.uploader.uploadAll();
      that.ngxService.stop();
      that.invalid=false;
      that.formdata={
        _id:"",
        name:"",
        pageurl:"",
        image:"",
        meta_title:"",
        meta_desc:""
      };
      that.r.navigateByUrl('/home/view-category');
      })
    }
  }
}
