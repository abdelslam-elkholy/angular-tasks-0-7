import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productslice'
})
export class ProductPipe implements PipeTransform {

  transform(value:string,args:number): string {
    return value.slice(0, args);;
  }

}
