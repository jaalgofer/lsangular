import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
// import { MenuComponent } from '../../components/menu/menu.component';
import { AdminModule } from "../admin/admin.module";
import { NavbaradminComponent } from "../../components/navbaradmin/navbaradmin.component";
@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    AdminModule,
    
  ],
  declarations: [NavbaradminComponent]
  // declarations: [MenuComponent, NavbaradminComponent]
})
export class MenuModule { }
