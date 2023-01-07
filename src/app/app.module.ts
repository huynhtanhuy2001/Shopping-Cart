import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageProductComponent } from './page-product/page-product.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, PageCartComponent, PageProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
