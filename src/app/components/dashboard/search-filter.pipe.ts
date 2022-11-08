import { Pipe, PipeTransform } from '@angular/core';
import { product } from 'src/app/services/product.service';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Products: product[], searchValue: string): product[] {
    if(!Products || !searchValue){
      return Products;
    }
    return Products.filter(product =>{
      product.model.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  }
}
