import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { IProduct } from '../interface/Iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getproduct(): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products`)
  }
  addProduct(product:IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:3000/products`, product);
  }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/`+ id);
  }
  delet(id:number): Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/`+id)
  }
  update(product:IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
}
