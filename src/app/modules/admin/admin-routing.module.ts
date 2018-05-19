import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesComponent } from '../../components/docentes/docentes.component';
import { CargahorariaComponent } from '../../components/cargahoraria/cargahoraria.component';
import { PermanenciaComponent } from '../../components/permanencia/permanencia.component';
import { ConfigComponent } from '../../components/config/config.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [DocentesComponent, CargahorariaComponent, PermanenciaComponent, ConfigComponent]
})
export class AdminRoutingModule { }
