import { ProductCartComponent } from './lab4/product-cart/product-cart.component';
import { ProductListComponent } from './lab4/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'productList',title:'Product List',component:ProductListComponent},
{path:'productdet/:id',component:ProductCartComponent},
{path:'',redirectTo:'productList',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
