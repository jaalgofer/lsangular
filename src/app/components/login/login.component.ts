import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { Router } from '@angular/router';
import { StorageService } from "../../services/storage.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  number_document: string;
  password: string;
  statusButton: boolean = false;

  constructor(
    private SessionService$: SessionService, 
    private StorageService$: StorageService,
    private router: Router
  ) { }

  accion(): void {
    this.statusButton = !this.statusButton;
    this.login();
  }

  objParam(): any {

    return {
      number_document: this.number_document,
      password: this.password
    }

  }

  login(): void {
    this.SessionService$.login(this.objParam())
      .subscribe(resp => {
        console.log(resp);
        this.StorageService$.setCurrentSession(resp.data);
        this.statusButton = !this.statusButton;
        this.router.navigate(['menu']);
      }, resp => this.statusButton = !this.statusButton);

  }

  ngOnInit() {
  }

}
