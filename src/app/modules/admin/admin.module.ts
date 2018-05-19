import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
