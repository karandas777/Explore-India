import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NotificationsService } from 'angular2-notifications';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public uploader : FileUploader = new FileUploader ({url:"http://localhost:3000/api/upload-file" , itemAlias:"img"})
  
  fileToUpload: File = null;

list:any=[];
formdata:any={
  _id:"",
  name:"",
  pageurl:"",
  image:"",
  meta_title:"",
  meta_desc:""
};

imagepath="../../assets/uploads/";

invalid:boolean=false;
alert="";

displayedColumns: string[] = ['_id', 'name', 'pageurl','image', 'meta_title','meta_desc','actions'];
dataSource;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;




  constructor(private d: DataService,private ngxService: NgxUiLoaderService,private notiservice: NotificationsService) { }

  ngOnInit() {
    this.getRecords();
    this.uploader.onAfterAddingFile = (file) =>{file.withCredentials=false};
  }

  getImageName(img){
    this.formdata.image=img.target.files[0].name;
  }

  getRecords(){
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
      that.list=data;
      that.dataSource= new MatTableDataSource<tabledef>(this.list);
      that.dataSource.paginator = this.paginator;
    })
  }


  edit(form){
    this.formdata=form;
  }




  update(){
    if(this.formdata.meta_title==="" || this.formdata.meta_desc=== "" || this.formdata.image==="" || this.formdata.name === "" || this.formdata.pageurl === ""){
      this.invalid=true;
      this.alert="Please fill all the details !!!";
    }
    else{
      let headers = new HttpHeaders;
      headers = headers.set('content-type','application/json');
      headers = headers.set('auth',localStorage.getItem('token'));
    const method = "/edit-category"
    const that =this;
    this.ngxService.start();
    this.d.postFun(method,this.formdata,{headers})
    .then((res)=>{
      that.getRecords();
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
    })
    }
  }

  delete(id){
    var headers = new HttpHeaders;
    headers = headers.set('content-type','application/json');
    headers = headers.set('auth',localStorage.getItem('token'));
    const method = '/remove-category';
    const that =this;
    this.ngxService.start();
    this.d.postFun(method,{_id:id},{headers})
    .then((res)=>{
      that.getRecords();
      that.ngxService.stop();
    })
  }

  modalclose(){
    this.uploader.uploadAll();
  }

}

export interface tabledef {
  _id:string,
  name:string,
  pageurl:string,
  image:string,
  meta_title:string,
  meta_desc:string
}
