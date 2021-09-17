import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editedUser = {
    username: '',
    email: '',
    birthday: '',
    age: ''
  };

  currentUser = {
    username: sessionStorage.getItem('username'),
    email: sessionStorage.getItem('email'),
    birthday: sessionStorage.getItem('birthday'),
    age: sessionStorage.getItem('age')
  }
  constructor(private router: Router, private http: HttpClient ) { }

  editUser(){
    this.http.post(BACKEND_URL + '/profile', this.editedUser)
    // JSON.stringify(this.e, this.b, this.a, this.u)
    sessionStorage.setItem('username', this.editedUser.username)
    sessionStorage.setItem('email', this.editedUser.email)
    sessionStorage.setItem('birthday', this.editedUser.birthday)
    sessionStorage.setItem('age', this.editedUser.age)
    this.router.navigateByUrl('account');
  }
  

  ngOnInit(): void {
  }

}
