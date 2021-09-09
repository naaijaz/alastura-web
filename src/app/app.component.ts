import { Component } from '@angular/core';
import { ProductDataService } from './product-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'bootpro';
  cart: any = [];
  CartTotal = 0;
  Tax = 2.33;
  constructor(private productDataService: ProductDataService) {
  }

  showCart = true;

  showHideCart() {
    this.showCart = !this.showCart;
  }


  ngOnInit(): void {
    this.productDataService.CartObserver.subscribe((cart) => {
      this.cart = cart;
      this.CartTotal = this.productDataService.CartTotal;
      this.Tax = this.CartTotal * 5 / 100;
    });
  }
  clearCart = () => {
    this.productDataService.clearCart();
  }
  removeFromCart = (item) => {
    this.productDataService.removeFromCart(item);
  }

  updateCart(Prodval: any) {
    this.productDataService.updateCart(Prodval);
  }
}
