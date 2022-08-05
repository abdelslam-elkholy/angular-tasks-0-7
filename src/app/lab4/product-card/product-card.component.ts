import { ProductService } from './../product.service';
import { IProduct } from './../-interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('productdata') product!: IProduct;
  @Output() OnSelectedProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor(private productservic: ProductService) { }
  ngOnInit(): void {
  }
   productselected(product: IProduct): void {
     this.OnSelectedProduct.emit(product);
     console.log(product)
  }
  setproductdata(product: IProduct) {
    this.productservic.setProductdata(product);
  }
}
