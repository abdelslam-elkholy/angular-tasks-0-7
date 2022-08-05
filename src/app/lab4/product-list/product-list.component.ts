import { ProductService } from './../product.service';
import { IProduct } from './../-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allprodut: IProduct[] = [];
  productdata?: IProduct;
  // products!: IProduct[]
  filterText = '';
  constructor(private productservic: ProductService) { }

  ngOnInit(): void {
    this.allprodut = this.productservic.getAllProduct();
    // this.products = this.productservic.getAllProduct();
  }
  getSelectedproduct(product: IProduct) {
    this.productdata = product;
  }
}
