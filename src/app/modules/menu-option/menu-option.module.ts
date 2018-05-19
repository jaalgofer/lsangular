import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionComponent } from '../../components/menu-option/menu-option.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [MenuOptionComponent],
  exports: [MenuOptionComponent]
})
export class MenuOptionModule { }
