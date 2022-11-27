import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {


  // variables
  formCreateProduct!: FormGroup;
  file : File = undefined;
  imgSelect: any | ArrayBuffer= ''; // imagen por defecto.

  constructor(private fb: FormBuilder, private productSvc: ProductService) { }


  // inicia la validacion.
  ngOnInit(): void {
    this.formCreateProduct= this.initForm();
  }


  // valida el formulario
  initForm(): FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      id: ['', [Validators.required]],
      portada: ['', [Validators.required]]
    });
  }

  // crea un producto
  createProduct(){
    this.productSvc.createProduct(this.formCreateProduct.value, this.file).subscribe({
      next: data =>{
        console.log(data);
        console.log(this.formCreateProduct.value);
      },
      error: error =>{
        console.log(error);
      }
    });
  }


  // carga la imagen en el formulario cuando se añade una img.
  fileChangeEvent(event: any):void{
    var file; // guarda la img selecciona por el usuario.
    if(event.target.files && event.target.files[0]){ // comprueba si es una img.
      file = <File>event.target.files[0];
    }else{
      console.log('error al subir la imagen')
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
        console.log('Formato no compatible. Recuerda (png, webp, jpg o jpeg).');
      }
    }else{
      console.log('La imagen no debe pasar de 4MB.')
    }
    console.log(this.file);
  }

}
