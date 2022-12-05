import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cupon',
  templateUrl: './create-cupon.component.html',
  styleUrls: ['./create-cupon.component.scss']
})
export class CreateCuponComponent implements OnInit {

  // variables
  formCreateCupon!: FormGroup;



  constructor(private fb: FormBuilder) { }


  // inicia la validacion
  ngOnInit(): void {
    this.formCreateCupon= this.initForm();
  }

  // valida el formulario
  initForm(): FormGroup{
    return this.fb.group({
      codigo: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      limite: ['', [Validators.required]]
    });
  }

  createCupon(){
    console.log(this.formCreateCupon.value);
    
  }


  

}
