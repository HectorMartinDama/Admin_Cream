import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-grafico-ventas',
  templateUrl: './grafico-ventas.component.html',
  styleUrls: ['./grafico-ventas.component.scss']
})
export class GraficoVentasComponent {


  single: any[];
  view: [number, number]= [700, 300];

  // options
  gradient: boolean= true;
  showLegend: boolean= true;
  showLabels: boolean= true;
  isDoughnut: boolean= false;


  colorScheme= {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void{
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivated(data): void{
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void{
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



}
