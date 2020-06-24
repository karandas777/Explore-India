import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  catlist = [];
  imgurl = "../../assets/uploads/";
  p: number = 1;
  constructor(private data: DataService, private loader: NgxUiLoaderService) {}

  ngOnInit() {
    this.funGetPosts();
  }

  funGetPosts() {
    const method = "/get-all-category";
    const that = this;

    this.loader.startBackground();
    this.data.getFun(method).then(res => {
      that.loader.stopBackground();
      if (res["status"] === "OK") {
        that.catlist = res["message"];
      } else {
        alert("something went wrong...!!");
      }
    });
  }
}
