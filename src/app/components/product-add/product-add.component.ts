import { ProductService } from './../../servies/product.service';
import { Component } from '@angular/core';
import {  FormBuilder,Validator, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/Iproduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

constructor(  private formBuilder: FormBuilder,
  private productService: ProductService
  ){}
productForm = this.formBuilder.group({
name: ['',Validators.required],
price:[0],
address: this.formBuilder.group({
  city: [''],
  zip: [''],
})
})
onHandleSubmit() {
if(this.productForm.valid){
  const product:IProduct={
    name: this.productForm.value.name || "",
    price: this.productForm.value.price || 0,
    address: {
      city: this.productForm.value.address?.city || "",
      zip: this.productForm.value.address?.zip || ""
    }
    // img: ''
  }

console.log(this.productForm.value)
this.productService.addProduct(product).subscribe(data=>{console.log(data);
})
}
}
}
