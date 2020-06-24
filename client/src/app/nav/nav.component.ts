import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
username:any=""
  constructor(private r:Router) { }

  ngOnInit() {
    this.username=localStorage.getItem('user');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.r.navigateByUrl('/login');
  }
}
