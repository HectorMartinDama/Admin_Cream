import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { marca, MarcaService } from 'src/app/services/marca.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import * as marcaActions from '../../../state/actions/marca.actions';
import { Observable } from 'rxjs';
import { MarcaModel } from 'src/app/models/marca.interface';

@Component({
  selector: 'app-index-marca',
  templateUrl: './index-marca.component.html',
  styleUrls: ['./index-marca.component.scss']
})
export class IndexMarcaComponent implements OnInit {

  // variables
  marcas$: Observable<any>= new Observable();
  columnsDisplay: string[]= ['nombre', 'funciones']; // nombre de las columnas
  data: any;
  searchValue: string; // guarda el valor del input.
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private store: Store<any>, public dialog: MatDialog, private notificationSvc: NotificationService) { }

  ngOnInit(): void {
    this.marcas$= this.store.select(marcaActions.loadMarcas);
    this.store.dispatch(marcaActions.loadMarcas());
    this.printMarcas();
  }

  printMarcas(): void{
    this.marcas$.subscribe(marca =>{
      this.data= new MatTableDataSource<MarcaModel>(marca);
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

  /* borra una marca
  deleteMarca(id){
    this.marcaSvc.borrarMarca(id).subscribe({
      next: data =>{
        this.notificationSvc.openSnackBar(data.message, 'cerrar');   
      },
      error: error =>{
        this.notificationSvc.openSnackBar('Error al borrar la marca.', 'cerrar');
      }
    })
  }*/

  /* abre el modal, para eliminar una marca.
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
  }*/
}
