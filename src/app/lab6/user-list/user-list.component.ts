import { ProductService } from './../../lab4/product.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  alluserFromApi: any = [];
  curntpage: number = 1;
  constructor(private userservic: ProductService) { }

  ngOnInit(): void {this.getallUserFromAPi(1);
  }
  getallUserFromAPi(page = 1) {
    this.userservic.getalluserFromApi(page).subscribe(user => {
      this.alluserFromApi = user;
      this.curntpage = page;
    }, (err: HttpErrorResponse) => {
      console.log(err.message)
    })}
}
