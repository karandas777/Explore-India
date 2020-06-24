import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {
post;
location;
imgurl="../../assets/uploads/";
postlist=[];
p: number = 1;

  constructor(private route:ActivatedRoute, private data:DataService,private loader:NgxUiLoaderService) {
    this.route.params.subscribe((res)=>{
      this.location=res.location;
    })
  }

  ngOnInit() {
    this.funGetPost();
  }

  funGetPost(){
    const method = '/get-sorted-post';
    const that= this;
    const myquery={pageurl:this.location};

    this.data.postFun(method,{query:myquery})
    .then((res)=>{
      if(res['status']==="OK"){
        that.post=res['message'][0];
      }
      else{
        alert('something went wrong..!!');
      }
      that.funGetAllPost();
    })
  }


  funGetAllPost(){
    const method = '/get-sorted-post';
    const that= this;
    const myquery={cat_name:this.post.cat_name}

    this.loader.startBackground();
    this.data.postFun(method,{query:myquery})
    .then((res)=>{
      that.loader.stopBackground();
      if(res['status']==="OK"){
        that.postlist=res['message'];
      }
      else{
        alert('something went wrong..!!');
      }
    })
  }


  changeLocation(newloc){
    this.location=newloc;
    this.ngOnInit();
  }
}
