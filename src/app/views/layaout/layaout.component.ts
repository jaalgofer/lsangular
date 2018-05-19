import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.css']
})
export class LayaoutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getRouter() {
    const _routeActive = this.route.snapshot.paramMap.get('id');
    console.log(_routeActive);
  }

  ngOnInit() {
    this.getRouter();
  }

}