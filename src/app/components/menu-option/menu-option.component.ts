import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css'],
  host: { ['class']: 'menu-principal' }
})
export class MenuOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
