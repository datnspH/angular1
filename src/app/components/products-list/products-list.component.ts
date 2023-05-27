import { ProductService } from './../../servies/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

products: any = []

constructor(private productService: ProductService){
this.productService.getproduct().subscribe(data=>
  {  this.products = data
  },error => console.error(error)
  )
} 
onremove(id:any){
this.productService.delet(id).subscribe( ()=>{confirm("bạn muốn xóa y/n")},()=>{
  this.products = this.products.filter((item: { id: any; })=> item.id !== id),this.productService.getproduct()
}
)
}
}

