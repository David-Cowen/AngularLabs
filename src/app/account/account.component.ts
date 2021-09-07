import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  userid = sessionStorage.getItem('userid');
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('userbirthdate');
  userage = sessionStorage.getItem('userage');

  subscription: any;
  user: any;
  // user = sessionStorage.getItem('currentUser')
  
  // constructor(private route:ActivatedRoute, private router:Router) { }
 
  ngOnInit() {
    // if (this.user == null){
    //   alert("Please log in first.")
    //   this.router.navigateByUrl('/')
    // }
    // this.subscription = this.router.paramMap.subscribe(params => {{this.user = params.get("user")}})  
  }

  logOut() {
    // sessionStorage.clear()
    // alert("You have succesfully logged out.")
    // this.router.navigateByUrl('/')
  }

  edit() {
    sessionStorage.setItem('user', JSON.stringify(this.user))
  }

}
