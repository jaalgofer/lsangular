import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login-tools/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  number_document:string;
  password:string;
  statusButton:boolean = false;

  accion(): void {
    this.statusButton = !this.statusButton;
    this.login();
  }

  objParam():any{

    return {
      number_document: this.number_document,
      password: this.password
    }

  }

  login():void{
    this.LoginService.loginPost$(this.objParam())
    .subscribe(resp => {
      console.log(resp);
      this.statusButton = !this.statusButton;
      this.router.navigate(['menu']);
      }, resp => this.statusButton = !this.statusButton);

  }

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

}
