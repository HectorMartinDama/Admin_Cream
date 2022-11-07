import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { product, ProductService } from 'src/app/services/product.service';
import { runInThisContext } from 'vm';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProductoComponent implements OnInit {

  
  columnsDisplay: string[]= ['model', 'brand', 'uid'];
  data: any;
  @ViewChild('page') paginator: MatPaginator;

  

 


constructor(private productSvc: ProductService, private http: HttpClient) {
  this.productSvc.allProducts().subscribe(x =>{
    this.data= new MatTableDataSource<product>(x);
    this.data.paginator= this.paginator;
  })
  }


  
  
  

  



  ngOnInit(): void {}

}
