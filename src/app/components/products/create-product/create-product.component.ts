import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, MinValidator, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { timeStamp } from 'console';
import { NotificationService } from 'src/app/services/notification.service';
import { MarcaService } from 'src/app/services/marca.service';

export interface Talla{
  value: string
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {


  // variables
  separatorKeysCodes= [ENTER, COMMA] as const;
  listaMarcas: Array<any>=[];
  listaTallas: string[]= ['36', '37', '37.5', '38', '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42'];
  formCreateProduct!: FormGroup;
  file : File = undefined;
  imgSelect: any | ArrayBuffer= ''; // img por defecto.


  constructor(private fb: FormBuilder, private productSvc: ProductService, private router: Router, private notificationSvc: NotificationService, private marcaSvc: MarcaService) { }

 





  
  ngOnInit(): void { // inicia la validacion.
    this.formCreateProduct= this.initForm();
    this.formCreateProduct.patchValue({publicado: false});
    // recupero las marcas disponibles
    this.marcaSvc.allMarcas().subscribe(x =>{
      x.forEach(element =>{
        this.listaMarcas.push(element.nombre);
      })
    })
  }


  // valida el formulario
  initForm(): FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      tallas: ['', [Validators.required]],
      precioCompra: ['', [Validators.required]],
      precioVenta: ['', [Validators.required]],
      publicado: ['', []],
      portada: ['', [Validators.required]]
    });
  }


  

  // crea un producto
  createProduct(){
    this.productSvc.createProduct(this.formCreateProduct.value, this.file).subscribe({
      next: data =>{
        this.notificationSvc.openSnackBar(data.message, 'cerrar');
        this.router.navigate(['/products']);
      },
      error: error =>{
        this.notificationSvc.openSnackBar(error.error.message,'cerrar');
      }
    });
  }


  // carga la imagen en el formulario cuando se añade una img.
  fileChangeEvent(event: any):void{
    var file; // guarda la img selecciona por el usuario.
    if(event.target.files && event.target.files[0]){ // comprueba si es una img.
      file = <File>event.target.files[0];
    }else{
      this.notificationSvc.openSnackBar('Error al subir la imagen.', 'cerrar');
    }
    // valida que la imagen pese menos de 4MB.
    if(file.size <= 4000000){ // valida el tipo de img.
      if(file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg' || file.type == 'image/webp'){
        // carga la img.
        const reader= new FileReader();
        reader.onload = e => this.imgSelect = reader.result;
        reader.readAsDataURL(file);

        // pone el nombre de la imagen en el input (inputPortada)
        //this.formCreateProduct.patchValue({inputPortada: file.name});

        // guardo la img seleccionada por el usuario en la variable.
        this.file= file;

      }else{
        this.formCreateProduct.patchValue({inputPortada: 'Seleccionar imagen'}); // si la img no es valida reseteo el nombre del input.
        this.notificationSvc.openSnackBar('Formato no compatible. Recuerda (png, webp, jpg o jpge).', 'cerrar');
      }
    }else{
      this.notificationSvc.openSnackBar('La imagen no debe pasar de 4MB.', 'cerrar');
    }
    console.log(this.file);
  }
}
