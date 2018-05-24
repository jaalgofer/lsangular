import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { Router } from '@angular/router';
import { StorageService } from "../../services/storage.service";
import { Login } from '../../models/class/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  statusButton: boolean = false;
  private Login;
  constructor(
    private SessionService$: SessionService, 
    private StorageService$: StorageService,
    private router: Router,
  ) { 
    this.Login = new Login();
  }

  accion(): void {
    this.statusButton = !this.statusButton;
    this.login();
  }

  objParam(): any {

    return {
      data: this.Login
    }

  }

  login(): void {

    this.SessionService$.login(this.objParam())
      .subscribe(resp => {
        this.statusButton = !this.statusButton;
        if(resp.Respuesta){
          this.StorageService$.setCurrentSession(resp.Data);
          this.router.navigate(['menu']);
        }
      }, resp => this.statusButton = !this.statusButton);

  }

  ngOnInit() {
  }

}
