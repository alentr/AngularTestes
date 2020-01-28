import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-service',
  templateUrl: './teste-service.component.html',
  styleUrls: ['./teste-service.component.css']
})
export class TesteServiceComponent implements OnInit {

  public funcionarios = [];
  public testes = [];
  public error;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getFuncionarios();

    this.funcionarioService.getFuncionariosWS().subscribe(
      data => {
        this.testes = data.slice(1, 10);
      },
      error => {
        this.error = error;
        alert(this.error)
      }
    );
  }

}
