import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { cupon, CuponService } from 'src/app/services/cupon.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-index-cupon',
  templateUrl: './index-cupon.component.html',
  styleUrls: ['./index-cupon.component.scss']
})
export class IndexCuponComponent implements OnInit {

  // Variables
  columnsDisplay: string[]= ['codigo', 'tipo', 'valor', 'limite', 'funciones']; // nombre de las columnas
  data: any;
  searchValue: string; // guarda el valor del input.
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private cuponSvc: CuponService, public dialog: MatDialog, private notificationSvc: NotificationService) { }


  // guarda los datos en la variable data.
  ngOnInit(): void {
    this.cuponSvc.allCupones().subscribe(x =>{
      this.data= new MatTableDataSource<cupon>(x);
      this.data.paginator= this.paginator;
    });
  }

  // borra un cupon
  borrarCupon(id){
    this.cuponSvc.borrarCupon(id).subscribe({
      next: data =>{
        this.notificationSvc.openSnackBar(data.message, 'cerrar');
        
      },
      error: error =>{
        this.data.notificationSvc.openSnackBar(error.error.message, 'cerrar');
      }
    });
  }

  // filtra la informacion de la tabla.
  applyFilter(event: Event){
    const filterValue= (event.target as HTMLInputElement).value;
    this.data.filter= filterValue.trim().toLowerCase();
    if(this.data.paginator){
      this.data.paginator.firstPage();
    }
  }



  // abre el modal, para eliminar un cupon.
  openDialog(nombre, id): void{
    const dialogRef= this.dialog.open(ConfirmDialogComponent, {
      width: '512px',
      data: { // envio los datos al dialog
        titulo: 'cupon',
        nombre: nombre
      }
    });

    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
        this.borrarCupon(id);
      }
    });
  }



}
