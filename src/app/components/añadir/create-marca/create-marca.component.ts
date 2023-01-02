import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-create-marca',
  templateUrl: './create-marca.component.html',
  styleUrls: ['./create-marca.component.scss']
})
export class CreateMarcaComponent implements OnInit {

  // variables
  formCreateMarca!:FormGroup;


  constructor(private fb: FormBuilder, private marcaSvc: MarcaService, private router: Router, private notificationSvc: NotificationService) { }

  ngOnInit(): void {
    this.formCreateMarca= this.initForm();
  }

  // valida el formulario
  initForm(): FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required]]
    })
  };

  createMarca(){
    this.marcaSvc.createMarca(this.formCreateMarca.value).subscribe({
      next: data =>{
        // limpio el input
        this.formCreateMarca.reset();
        this.notificationSvc.openSnackBar(data.message, 'cerrar');
      },
      error: error =>{
        this.formCreateMarca.reset();
        this.notificationSvc.openSnackBar(error.error.message, 'cerrar');
      } 
    })
  };



}
