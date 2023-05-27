import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductEditComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
