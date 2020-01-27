import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-service',
  templateUrl: './teste-service.component.html',
  styleUrls: ['./teste-service.component.css']
})
export class TesteServiceComponent implements OnInit {

  public funcionarios = [
    {"id": 1, "name": "Alexandre", "age": 27},
    {"id": 2, "name": "Ágda", "age": 35},
    {"id": 3, "name": "Heitor", "age": 1}
  ]

  constructor() { }

  ngOnInit() {
  }

}
