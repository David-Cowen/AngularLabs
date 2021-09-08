import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}

// for angular http methods
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Userpass } from 'server/www/api/login.js'
import { Userobj } from '.../userobj';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  userpass: Userpass = {username: 'dave@email.com', pass: '123'};
  userobj: Userobj = {userid: 1, email: this.userpass.username, userbirthdate: null, userage: 34};

  constructor(private router:Router, private httpClient: HttpClient ) { }

  ngOnInit() {}
  public loginfunc() {
    this.httpClient.post(BACKEND_URL + '/login', this.userpass, httpOptions)
    .subscribe((data: any) => {
      alert(JSON.stringify(this.userpass))
      if (data.ok) {
        sessionStorage.setItem('userid', this.userobj.userid.toString());
        sessionStorage.setItem('username', this.userobj.username);
        sessionStorage.setItem('userbirthdate', this.userobj.userbirthdate);
        sessionStorage.setItem('userage', this.userobj.userage.toString());
        this.httpClient.post<Userobj[]>(BACKEND_URL + '/loginAfter', this.userobj, httpOptions)
        .subscribe((m: any) => {console.log(m[0]);});
        this.router.navigateByUrl('account');
      } else {
        alert("Not Authorised.");
      }
    });
  }
}


  // itemClicked(){
  //   if (this.email == "dave@email.com" && this.password=="123") {
  //     var user = "dave";
  //     this.router.navigate(["/account", user])
  //   } else if (this.email == "bill@email.com" && this.password=="124") {
  //     var user = "Billy";
  //     this.router.navigate(["/account", user])
  //   } else if (this.email == "isla@email.com" && this.password=="122") {
  //     var user = "Isla";
  //     this.router.navigate(["/account", user])
  //   } else {
  //     alert("User unauthorised.")
  //   }
  // }

