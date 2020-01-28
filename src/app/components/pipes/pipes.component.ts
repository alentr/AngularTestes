import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "Alexandre Telles";
  public message = "testes angular";
  public person = {
    "firstName": "Alexandre",
    "lastName": "Telles"
  }
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
