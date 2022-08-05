import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { IProduct } from './../-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
// products:any[]=[];
productid: number = 0;
  @Input() productdtl?: IProduct;
  constructor(private productservice:ProductService, private arout: ActivatedRoute) { }
  productdata?: IProduct;
  ngOnInit(): void {

    this.arout.params.subscribe(pram => {
      this.productid = pram['id']
      console.log(pram)
      this.productdtl = this.productservice.getProductByID(this.productid)
    })
    this.productservice.getProductData().subscribe(data => {
      this.productdata = data;
      // this.products.push(data)
      console.log(JSON.stringify(data))
    })
    console.log('on init')
  }
  // removeTask(id:number){
  //   this.products=this.products.filter(todo=>todo.id!==id)

  // }
}