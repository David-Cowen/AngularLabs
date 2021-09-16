import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() formUser = { email: "", password: "" };

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    this.http.post(BACKEND_URL + '/login', this.formUser).subscribe((data: any) => {
      if (data.valid) {
        sessionStorage.setItem('username', JSON.stringify(data.user.username))
        sessionStorage.setItem('birthday', data.user.birthday)
        sessionStorage.setItem('age', data.user.age)
        sessionStorage.setItem('email', data.user.email)
        sessionStorage.setItem('valid', data.user.valid)
      } else {
        alert("User credentials are invalid.")
      }
    });
  }
}
