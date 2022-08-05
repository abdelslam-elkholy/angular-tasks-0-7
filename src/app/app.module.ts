import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HeaderContainerComponent } from './home/header-container/header-container.component';
import { NavComponent } from './home/nav/nav.component';
import { PageComponent } from './home/page/page.component';
import { AsideComponent } from './home/aside/aside.component';
import { FooterComponent } from './home/footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StarComponent } from './star/star.component';
import { ProductListComponent } from './lab4/product-list/product-list.component';
import { ProductCardComponent } from './lab4/product-card/product-card.component';
import { ProductCartComponent } from './lab4/product-cart/product-cart.component';
import { FavoriteProductComponent } from './lab4/favorite-product/favorite-product.component';
import { ProductPipe } from './lab5/_pipes/product.pipe';
import { FilterProductsPipe } from './lab5/_pipes/filter-products.pipe';
import { ColorsDirective } from './lab5/_distructive/colors.directive';
import { RepeatDirective } from './lab5/_distructive/repeat.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './lab6/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContainerComponent,
    NavComponent,
    PageComponent,
    AsideComponent,
    FooterComponent,
    TodoListComponent,
    StarComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductCartComponent,
    FavoriteProductComponent,
    ProductPipe,
    FilterProductsPipe,
    ColorsDirective,
    RepeatDirective,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
