import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(filterPro: any[], filterText: string, filterProps: string[]) {
    let product: any = [];
    if (!filterText) {
      return filterPro
    } else {
      filterPro.forEach(selectedProduct => {
        filterProps.forEach(xproduct => {
          if (selectedProduct[xproduct] && selectedProduct[xproduct].toString().toLowerCase().includes(filterText.toLowerCase())) {
            if (!product.includes(selectedProduct)) {
              product.push(selectedProduct);
            }

          }
         
        })
      })
    }

    return product;
  }

}
