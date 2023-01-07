import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public API_URL = 'https://62386f1c0a54d2ceab75919f.mockapi.io/pageProduct';
  public product_cart: any[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
  getProduct(): Observable<Product> {
    return this.http
      .get<Product>(`${this.API_URL}`)
      .pipe(retry(1), catchError(this.httpError));
  }
  getProductId(id: any): Observable<Product> {
    return this.http
      .get<Product>(`${this.API_URL}/${id}`)
      .pipe(retry(1), catchError(this.httpError));
  }
}
