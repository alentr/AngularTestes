import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.css']
})
export class ComponentFilhoComponent implements OnInit {

  // Dessa forma a variável fica igual o nome que recebeu do componente pai
  /*
  @Input()
  public parentData;
  */

  // Dessa forma, podemos alterar o nome da variável
  @Input('parentData')
  public nome;

  @Output()
  public chieldEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fireEvent() {
    this.chieldEvent.emit('Olá!! Mensagem do componente filho para o pai');
  }

}
