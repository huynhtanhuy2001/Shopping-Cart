import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css'],
})
export class PageCartComponent implements OnInit {
  public productCart: any[] = [];
  constructor(public productsService: ProductsService, public router: Router) {}
  ngOnInit(): void {
    this.loadCart();
  }
  loadCart() {
    this.productCart = this.productsService.product_cart;
  }
  deleteProduct(id: any) {
    const index = this.productCart.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.productCart.splice(index, 1);
    }
  }
  goProductList() {
    this.router.navigate(['/product']);
  }
}
