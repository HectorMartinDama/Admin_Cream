import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { client, ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  // Variables
  columnsDisplay: string[]= ['nombre', 'apellidos', 'telefono', 'pais']; // nombre de las columnas.
  data: any;
  searchValue: string; // guarda el valor del input (buscador).
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientSvc: ClientService) { }


  // guarda los datos en la variable data.
  ngOnInit(): void {
   this.clientSvc.allClients().subscribe(x =>{
    this.data= new MatTableDataSource<client>(x);
    this.data.paginator= this.paginator;
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
