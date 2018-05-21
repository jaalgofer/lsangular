import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { SessionService } from '../../services/session.service';
import { User } from "../../models/class/user";

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

  openNavBar:boolean = false;
  user:string;

  constructor(private StorageService$: StorageService, private SessionService$: SessionService) { }

  ngOnInit() {
    this.user = this.StorageService$.getCurrentUser();
  }

  public toggleNavBar():void{
    this.openNavBar = !this.openNavBar;
  }

  public logout(){
    this.SessionService$.logout().subscribe(
      response => { if (response) { this.StorageService$.logout(); } }
    );
  }

}
