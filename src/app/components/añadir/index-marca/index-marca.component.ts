import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { marca, MarcaService } from 'src/app/services/marca.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-index-marca',
  templateUrl: './index-marca.component.html',
  styleUrls: ['./index-marca.component.scss']
})
export class IndexMarcaComponent implements OnInit {

  // variables
  columnsDisplay: string[]= ['nombre', 'funciones']; // nombre de las columnas
  data: any;
  searchValue: string; // guarda el valor del input.
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private marcaSvc: MarcaService, public dialog: MatDialog, private notificationSvc: NotificationService) { }

  ngOnInit(): void {
    this.marcaSvc.allMarcas().subscribe(x =>{
      this.data= new MatTableDataSource<marca>(x);
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

  // borra una marca
  deleteMarca(id){
    this.marcaSvc.borrarMarca(id).subscribe({
      next: data =>{
        this.notificationSvc.openSnackBar(data.message, 'cerrar');   
      },
      error: error =>{
        this.notificationSvc.openSnackBar('Error al borrar la marca.', 'cerrar');
      }
    })
  }

  // abre el modal, para eliminar una marca.
  openDialog(nombre, id): void{
    const dialogRef= this.dialog.open(ConfirmDialogComponent, {
      width: '512px',
      data: { // envio los datos al dialog
        titulo: 'marca',
        nombre: nombre
      }
    });
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
        this.deleteMarca(id);
      }
    });
  }
}
