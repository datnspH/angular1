import { ProductAddComponent } from './components/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'list', component: ProductsListComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
