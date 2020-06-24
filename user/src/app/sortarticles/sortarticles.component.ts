import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-sortarticles',
  templateUrl: './sortarticles.component.html',
  styleUrls: ['./sortarticles.component.css']
})
export class SortarticlesComponent implements OnInit {
city="";
postlist=[];
imgurl="../../assets/uploads/";
p: number = 1;
datalength=0;

  constructor(private route:ActivatedRoute , private data:DataService, private loader:NgxUiLoaderService) {
    this.route.params.subscribe((res)=>{
      this.city=res.city;
    })
  }

  ngOnInit() {
    this.funGetPost();
  }

  funGetPost(){
    const method = '/get-sorted-post';
    const that= this;
    const myquery={cat_name:this.city}

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
      that.datalength=this.postlist.length;
    })
  }

}
