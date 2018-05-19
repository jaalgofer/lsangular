import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from "../../components/menu/menu.component";
import { MenuOptionModule } from "../menu-option/menu-option.module";
import { MenuOptionComponent } from "../../components/menu-option/menu-option.component";
import { NavbaradminComponent } from '../../components/navbaradmin/navbaradmin.component';

const routes: Routes = [
  {
    path: 'menu/admin', component: MenuComponent, children: [
      { path: 'options', component: MenuOptionComponent }
    ]
  },
  { path: 'menu', redirectTo: 'menu/admin/options', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MenuOptionModule, FormsModule],
  exports: [RouterModule],
  declarations: [MenuComponent, NavbaradminComponent]
})
export class MenuRoutingModule { }
