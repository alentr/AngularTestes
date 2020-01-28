import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor-ngswitch',
  templateUrl: './ngif-ngfor-ngswitch.component.html',
  styleUrls: ['./ngif-ngfor-ngswitch.component.css']
})
export class NgifNgforNgswitchComponent implements OnInit {

  public numero: number;
  public arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit() {
  }

}
