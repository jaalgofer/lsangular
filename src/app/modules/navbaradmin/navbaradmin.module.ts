import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbaradminComponent } from '../../components/navbaradmin/navbaradmin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbaradminComponent],
  exports: [NavbaradminComponent]
})
export class NavbaradminModule { }
