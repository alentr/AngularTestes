import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  getFuncionarios() {
    return [
      {"id": 1, "name": "Alexandre", "age": 27},
      {"id": 2, "name": "Ágda", "age": 35},
      {"id": 3, "name": "Heitor", "age": 1}
    ];
  }
}
