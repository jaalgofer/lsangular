import { Component, OnInit } from '@angular/core';
import { DocenteService } from "../../services/docente.service";

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})

export class DocentesComponent implements OnInit {

  nombre: string;
  apellido: string;
  cedula: string;
  nacionalidad: string;
  telefono: string;
  correo: string;
  direccion: string;
  fecha_nacimiento: string;
  fecha_ingreso: string;
  profesion: string;
  dedicacion: string;
  categoria: string;
  condicion: string;
  activo: boolean;

  constructor(private DocenteService$: DocenteService) { }

  getAllDocentes() {

    const _requestViewAllDocente = this.DocenteService$.viewAllDocente();

    _requestViewAllDocente.subscribe(resp => console.log(resp));

  }

  ngOnInit() {
    this.getAllDocentes();
  }

}
