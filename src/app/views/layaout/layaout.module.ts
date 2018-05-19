import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayaoutRoutingModule } from './layaout-routing.module';
import { LayaoutComponent } from './layaout.component';
import { OptionsComponent } from "./options/options.component";
// import { NavbarModule } from "../../shared/navbar/navbar.module";
@NgModule({
  imports: [
    CommonModule,
    LayaoutRoutingModule,
    // NavbarModule
  ],
  declarations: [LayaoutComponent, OptionsComponent]
})
export class LayaoutModule { }
