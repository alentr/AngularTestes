import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [{
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: 'home'
            },
        ]
      },
      {separator: true},
      {
        label: 'ngIf ngFor ngSwitch',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'ng'
      },
      {separator: true},
      {
        label: 'Event binding',
        icon: 'pi pi-fw pi-sort-alt',
        routerLink: 'event-binding'
      },
      {separator: true},
      {
        label: 'Two way binding',
        icon: 'pi pi-fw pi-sort-alt',
        routerLink: 'two-way-binding'
      },
      {separator: true},
      {
        label: 'Pipes',
        icon: 'pi pi-fw pi-minus',
        routerLink: 'pipes'
      },
      {separator: true},
      {
        label: 'Interação entre componentes',
        icon: 'pi pi-fw pi-sliders-h',
        routerLink: 'inter-comp'
      },
      {separator: true},
      {
        label: 'Services',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'service'
      },
      {separator: true},
      {
        label: 'Form',
        icon: 'pi pi-fw',
        routerLink: 'form'
      }
    ];
  }

}
