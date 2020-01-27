import { FuncionarioService } from './../services/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-service',
  templateUrl: './teste-service.component.html',
  styleUrls: ['./teste-service.component.css']
})
export class TesteServiceComponent implements OnInit {

  public funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getFuncionarios();
  }

}
