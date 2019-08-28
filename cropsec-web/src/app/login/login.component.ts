import { Component, OnInit } from '@angular/core';
import { user } from 'src/Model/user';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: user;
  constructor(
    private router: Router,
    private helper: CommonHelper,
  ) { }

  ngOnInit() {
    this.helper.DeleteAllLocalStorage();
  }
  ValidateLogin(){
    this.router.navigate(['/Admin/UserRole']);
  }
}
