import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  host: { ['class']: 'menu-principal'}
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
