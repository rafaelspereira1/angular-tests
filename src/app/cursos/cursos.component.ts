import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  linkAcesso: string;

  cursos: string[];

  servico = new CursosService();

  constructor(cursoService: CursosService) {
    this.linkAcesso = 'https://www.google.com.br/';
    this.cursos = cursoService.getCursos();
  }

  ngOnInit(): void {}
}
