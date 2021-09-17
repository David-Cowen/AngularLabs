import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  constructor( private router: Router ) { }
  // subscription:any;
  // user:any;
  ngOnInit() {
    // console.log(this.user)
    // this.subscription=this.router.paramMap.subscribe(params => {{this.user = params.get("user")}})  
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl('login')
  }

  username = sessionStorage.getItem('username')
  email = sessionStorage.getItem('email')
  birthday = sessionStorage.getItem('birthday')
  age = sessionStorage.getItem('age')
}
