import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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


  email="";
  password="";
  user="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  itemClicked(){
    if (this.email == "dave@email.com" && this.password=="123") {
      var user = "dave";
      this.router.navigate(["/account", user])
    } else if (this.email == "bill@email.com" && this.password=="124") {
      var user = "Billy";
      this.router.navigate(["/account", user])
    } else if (this.email == "isla@email.com" && this.password=="122") {
      var user = "Isla";
      this.router.navigate(["/account", user])
    } else {
      alert("User unauthorised.")
    }
  }
}
