import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocentesComponent } from '../../components/docentes/docentes.component';
import { CargahorariaComponent } from '../../components/cargahoraria/cargahoraria.component';
import { PermanenciaComponent } from '../../components/permanencia/permanencia.component';
import { ConfigComponent } from '../../components/config/config.component';
import { PeriodoComponent } from '../../components/periodo/periodo.component';
import { CambiarPassAdminComponent } from '../../components/cambiar-pass-admin/cambiar-pass-admin.component';
import { ResPassUsuarioComponent } from '../../components/res-pass-usuario/res-pass-usuario.component';
import { BuzonComponent } from '../../components/buzon/buzon.component';

import { Docentes } from "../../models/class/docentes";
const routes: Routes = [
  // { path: 'admin/docentes', component: DocentesComponent },
  // { path: 'admin/cargahoraria', component: CargahorariaComponent },
  // { path: 'admin/permanencia', component: PermanenciaComponent },
  // { path: 'admin/config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
  exports: [RouterModule],
  declarations: [
    DocentesComponent,
    CargahorariaComponent,
    BuzonComponent,
    PermanenciaComponent,
    ConfigComponent,
    PeriodoComponent,
    CambiarPassAdminComponent,
    ResPassUsuarioComponent
  ],
  providers: [Docentes]
})
export class AdminRoutingModule { }
