import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../servies/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Iproduct';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  products:any = []
  editForm = this.FormBuilder.group({
    name:[''],
    price:0,
    address: this.FormBuilder.group({
      city:[''],
      zip:[''],
    })
  })
constructor(private productService:ProductService,
  private router:ActivatedRoute,
  private FormBuilder:FormBuilder
  ){
    this.router.paramMap.subscribe(param=>{
      const id = param.get('id');
      console.log(id);
      
      this.productService.getProduct(id).subscribe(data=>{
        console.log(data);
        this.products = data
        this.editForm.patchValue(this.products)
      })
    })
  }
  onupdate(){
    if(this.editForm.valid && this.products?.id){
      const product:IProduct = {
        id:this.products.id,
      name: this.editForm.value.name||'',
      price: this.editForm.value.price||0,
      address: {
        city: this.editForm.value.address?.city||"",
        zip: this.editForm.value.address?.zip||'',
      }
    }
    this.productService.update(product).subscribe(()=>{
     alert("update thành công")
    }
    )
    }
  }
}
