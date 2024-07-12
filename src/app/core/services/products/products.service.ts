import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageProductResponse } from '@core/models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL = environment.apiProducts;

  constructor(private http: HttpClient) { }

  getAllProducts(page: number, size: number): Observable<PageProductResponse> {
    return this.http.get<PageProductResponse>(`${this.baseURL}/product/get-all?page=${page}&size=${size}`)
  }

  getHelloWorld(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/hello-world`)
  }

}
