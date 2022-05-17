import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valorContador: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementaValor() {
    this.valorContador++;
    this.mudouValor.emit(this.valorContador);
  }
  decrementaValor() {
    this.valorContador--;
    this.mudouValor.emit(this.valorContador);
    if (this.valorContador < 0) {
      this.valorContador = 0;
      alert('Não é possível decrementar mais!');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
