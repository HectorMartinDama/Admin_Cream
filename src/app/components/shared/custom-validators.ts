import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {

  // Metodo que valida si la contraseña del formulario y la contraseña que se tiene que repetir son iguales.
  static productMaching(control: AbstractControl): ValidationErrors | null{
    const productName= control.get('productName')?.value;
    const message= control.get('valueInput')?.value;
    if(productName === message && (productName !== null)){
      return null;
    }else{
      return {productNotMaching: true};
    }
  }
}