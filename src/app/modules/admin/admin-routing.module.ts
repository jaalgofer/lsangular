import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocentesComponent } from '../../components/docentes/docentes.component';
import { CargahorariaComponent } from '../../components/cargahoraria/cargahoraria.component';
import { PermanenciaComponent } from '../../components/permanencia/permanencia.component';
import { ConfigComponent } from '../../components/config/config.component';

const routes: Routes = [
  { path: 'docentes', component: DocentesComponent },
  { path: 'cargahoraria', component: CargahorariaComponent },
  { path: 'permanencia', component: PermanenciaComponent },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
  declarations: [DocentesComponent, CargahorariaComponent, PermanenciaComponent, ConfigComponent]
})
export class AdminRoutingModule { }
