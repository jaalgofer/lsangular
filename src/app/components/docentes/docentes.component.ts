import { Component, OnInit } from '@angular/core';
import { DocenteService } from "../../services/docente.service";
import { Title } from "@angular/platform-browser";
import { Docentes } from '../../models/class/docentes';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})

export class DocentesComponent implements OnInit {

  docenteModel = new Docentes();
  dataDocente;
  keywords:string;
  constructor(private DocenteService$: DocenteService, private title: Title) { }

  getAllDocentes() {

    const _requestViewAllDocente = this.DocenteService$.viewAllDocente();

    _requestViewAllDocente.subscribe(resp => {
      this.dataDocente = resp;
      console.log(resp);
    });

  }

  ngOnInit() {
    this.title.setTitle('Docentes - Loads Schedule');
    this.getAllDocentes();
  }

}
