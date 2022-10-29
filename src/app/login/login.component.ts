import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any; //'candidate.54';
  pwd :any; //'Password@54';
  responseData:any;
  data = [
    {
      username: '',
      password: '',
    },
  ];

  constructor( private router:Router,
    private logins:LoginService ) { }

  ngOnInit(): void {
  }
  login() {
    this.data[0].username=this.username;
    this.data[0].password=this.pwd;
    this.logins.login(this.data[0]).subscribe((data:any)=>{
      console.log(data['token']);
this.responseData=data['token'];
localStorage.setItem('token',this.responseData);

this.router.navigateByUrl('/dashboard');



    });
  }
  }

