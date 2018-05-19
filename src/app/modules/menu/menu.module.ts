import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AdminModule } from "../admin/admin.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MenuRoutingModule,
    AdminModule,
  ],
  exports: [AdminModule, MenuRoutingModule]
})
export class MenuModule { }
