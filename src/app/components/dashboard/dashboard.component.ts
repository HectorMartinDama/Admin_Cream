import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { product, ProductService } from 'src/app/services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  
  columnsDisplay: string[]= ['model', 'brand', 'uid']; // nombre columnas
  data: any; // datos de la tabla
  searchValue: string; // guarda el valor del input (buscador)
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  // cuando carge el componente pinta la informacion en la tabla.
  constructor(private productSvc: ProductService) {
    this.productSvc.allProducts().subscribe(x =>{
      this.data= new MatTableDataSource<product>(x);
      this.data.paginator= this.paginator;
      this.data.sort= this.sort;
    })
  }

  
  // filtra la informacion de la tabla.
  applyFilter(event: Event){
    const filterValue= (event.target as HTMLInputElement).value;
    this.data.filter= filterValue.trim().toLowerCase();
    if(this.data.paginator){
      this.data.paginator.firstPage();
    }
  }

  

}
