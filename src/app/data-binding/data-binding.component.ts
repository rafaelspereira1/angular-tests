import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://www.google.com.br';
  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';

  curso: boolean = true;

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
