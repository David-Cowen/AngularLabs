import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }


  subscription:any;
  
  user:any;
  
  ngOnInit() {
    console.log(this.user)
    this.subscription=this.router.paramMap.subscribe(params => {{this.user = params.get("user")}})
    
  }

}
