import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css'],
})
export class PageProductComponent implements OnInit {
  ListProducts: any = [];
  product: any = {};
  cartProduct: any = [];
  constructor(public productsService: ProductsService, public router: Router) {}
  ngOnInit(): void {
    this.loadProduct();
    this.cartProduct = this.productsService.product_cart;
  }
  loadProduct() {
    return this.productsService.getProduct().subscribe((data: {}) => {
      this.ListProducts = data;
    });
  }
  public addCart(id: any, name: string, price: number, image: string) {
    this.product = {
      id: id,
      name: name,
      price: price,
      image: image,
    };
    this.cartProduct.push(this.product);
    this.productsService.product_cart = this.cartProduct;
    console.log(this.cartProduct);
  }
  public goCartProduct() {
    this.router.navigate(['/cart']);
  }
}
