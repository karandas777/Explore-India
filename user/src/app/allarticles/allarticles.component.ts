import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-allarticles',
  templateUrl: './allarticles.component.html',
  styleUrls: ['./allarticles.component.css']
})
export class AllarticlesComponent implements OnInit {
  postlist=[];
  imgurl="../../assets/uploads/";
  p: number = 1;
  datalength=0;
 
  constructor(private data:DataService, private loader:NgxUiLoaderService) { }

  ngOnInit() {
    this.funGetPosts();
  }

  funGetPosts(){
    const method="/get-all-post";
    const that = this;

    this.loader.startBackground();
    this.data.getFun(method)
    .then((res)=>{
      that.loader.stopBackground();
      if(res['status']==="OK"){
        that.postlist=res['message'];
      }
      else{
        alert('something went wrong..!!');
      }
      that.datalength=this.postlist.length;
    })
  }
}
