import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://www.google.com.br';
  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';
  valorAtual: string = '';

  curso: boolean = true;
  nomeDoCurso: string = 'Angular';

  mouseOver: boolean = false;

  valorInicialContador: number = 15;

  nome: string = 'abc';
  pessoa: any = {
    nome: 'Rafael',
    idade: 23,
  };

  onMudouValor(evento: Event) {
    console.log(evento);
  }

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  clickBotao() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }

  constructor() {}

  ngOnInit(): void {}
}
