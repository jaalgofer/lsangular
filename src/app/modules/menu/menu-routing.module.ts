import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuOptionModule } from "../menu-option/menu-option.module";

import { MenuComponent } from "../../components/menu/menu.component";
import { MenuOptionComponent } from "../../components/menu-option/menu-option.component";
import { NavbaradminComponent } from '../../components/navbaradmin/navbaradmin.component';

//componentes de menu

import { DocentesComponent } from '../../components/docentes/docentes.component';
import { BuzonComponent } from '../../components/buzon/buzon.component';
import { CargahorariaComponent } from '../../components/cargahoraria/cargahoraria.component';
import { CambiarPassAdminComponent } from '../../components/cambiar-pass-admin/cambiar-pass-admin.component';
import { ResPassUsuarioComponent } from '../../components/res-pass-usuario/res-pass-usuario.component';
import { PeriodoComponent } from '../../components/periodo/periodo.component';
import { PermanenciaComponent } from '../../components/permanencia/permanencia.component';
import { ConfigComponent } from '../../components/config/config.component';

// servicios de menu

import { AuthGuard } from '../../guards/auth.guard';
import { StorageService } from '../../services/storage.service';

const routes: Routes = [
  {
    path: 'menu/admin', component: MenuComponent, canActivate: [AuthGuard], children: [
      { path: '', component: MenuOptionComponent, canActivate: [AuthGuard] },
      { path: 'docentes', component: DocentesComponent, canActivate: [AuthGuard], },
      { path: 'buzon', component: BuzonComponent, canActivate: [AuthGuard], },
      { path: 'carga-horaria', component: CargahorariaComponent, canActivate: [AuthGuard], },
      { path: 'cambiar-pass-admin', component: CambiarPassAdminComponent, canActivate: [AuthGuard],},
      { path: 'res-pass-usuario', component: ResPassUsuarioComponent, canActivate: [AuthGuard],},
      { path: 'periodo', component: PeriodoComponent, canActivate: [AuthGuard], },
      { path: 'permanencia', component: PermanenciaComponent, canActivate: [AuthGuard], },
      { path: 'config', component: ConfigComponent, canActivate: [AuthGuard], }
    ]
  },
  { path: 'menu', redirectTo: 'menu/admin', pathMatch: 'full', canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MenuOptionModule, FormsModule],
  exports: [RouterModule],
  declarations: [MenuComponent, NavbaradminComponent],
  providers: [AuthGuard, StorageService]
})
export class MenuRoutingModule { }
