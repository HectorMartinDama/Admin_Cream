import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0" class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a class="sublevel-nav-link" *ngIf="item.items && item.items.length > 0">
          <i class="sublevel-link-icon"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapsed-icon" [ngClass]="!item.expanded ? 'fa fa-angel-rigth' : 'fa fa-angel-down'"></i>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SublevelMenuComponent implements OnInit {


  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false; // para tres niveles (No creo que lo utilice)

  constructor() { }

  ngOnInit(): void {
    

  }

  

}
