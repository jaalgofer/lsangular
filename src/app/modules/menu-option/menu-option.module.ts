import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionComponent } from '../../components/menu-option/menu-option.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [MenuOptionComponent],
  exports: [MenuOptionComponent, RouterModule]
})
export class MenuOptionModule { }
