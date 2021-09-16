import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formUser = { email: "", password: "" };

  constructor(private router:Router, private http: HttpClient ) { }

  ngOnInit() { }

  public login() {
    this.http.post(BACKEND_URL + '/login', this.formUser)
    .subscribe((data:any) => {
      console.log(this.formUser)
      if (data.valid) {
        console.log("working")
      } else {
        alert("Credentials Invalid.")
      }
    })
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


  // users = [{
  //   user:"dave",
  //   email:"dave@email.com",
  //   password:"123"
  // },
  // {
  //   user:"Billy",
  //   email:"bill@email.com",
  //   password:"124"
  // },
  // {
  //   user:"Isla",
  //   email:"isla@email.com",
  //   password:"122"
  // }]   