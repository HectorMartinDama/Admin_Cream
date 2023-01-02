import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandle } from 'src/app/directives/file-handle';
import { NotificationService } from 'src/app/services/notification.service';
import { product, ProductService } from 'src/app/services/product.service';
import { v4 as uuidv4 } from 'uuid';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-galeria-product',
  templateUrl: './galeria-product.component.html',
  styleUrls: ['./galeria-product.component.scss']
})
export class GaleriaProductComponent implements OnInit {


  


  // variables
  public id;
  columnsDisplay: string[]= ['imagen', 'eliminar']; // nombre de las columnas
  data: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  images: File[]=[];
  url: any;


  

  constructor(private productSvc: ProductService, private router: ActivatedRoute, private notificationSvc: NotificationService, public dialog: MatDialog) {
    this.url= 'http://localhost:4201/api/products/';
  }

  ngOnInit(): void {
    // obtengo el id del parametro url
   this.router.params.subscribe(params =>{
      this.id= params['id'];
    })
    this.productSvc.obtenerGaleria(this.id).subscribe(x =>{
      this.data= new MatTableDataSource<product>(x);
      this.data.paginator= this.paginator;
    });
  }

  onSelect(event){
    // antes de añadir el archivo compruebo si es una imagen.
    if(event.addedFiles[0].size <= 4000000){
      if(event.addedFiles[0].type == 'image/png' || event.addedFiles[0].type == 'image/jpg' || event.addedFiles[0].type == 'image/jpeg' || event.addedFiles[0].type == 'image/webp'){
        // inserta la imagen en el array.
        this.images.push(...event.addedFiles);
        const formData= new FormData();
        for(var i=0; i < this.images.length; i++){
          formData.append('',this.images[i]);
        }
      }else{
        this.notificationSvc.openSnackBar('El formato '+ event.addedFiles[0].type +' no es compatible.', 'cerrar');
      }
    }else{
      this.notificationSvc.openSnackBar('La imagen debe pesar menos de 4MB', 'cerrar');
    } 
  }

  onRemove(event) {
    console.log(event);
    this.images.splice(this.images.indexOf(event), 1);
  }

 
  subir_images(){
    this.images.forEach(img => this.subir_img(img));
  }

  subir_img(imagen){
      const data= {_id: uuidv4()};
      this.productSvc.agregarImgGaleria(data, imagen, this.id).subscribe({
        next: data=>{
          console.log(data);
        },
        error: error =>{
          console.log(error);
        }
      });
  }

  eliminar_img(id){
    this.productSvc.eliminarImgGaleria(this.id, {_id: id}).subscribe({
      next: data=>{
        this.notificationSvc.openSnackBar('Imagen eliminada con exito.', 'cerrar');
      },
      error: error =>{
        this.notificationSvc.openSnackBar('No se ha podido eliminar la imagen.', 'cerrar');
      }
    })
  }


  // abre el modal, para eliminar una imagen.
  openDialog(nombre, id): void{
    const dialogRef= this.dialog.open(ConfirmDialogComponent, {
      width: '512px',
      data: { // envio los datos al dialog
        titulo: 'imagen',
        nombre: nombre
      }
    });
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
       this.eliminar_img(id);
      }
    });
  }



  

  
 
}
