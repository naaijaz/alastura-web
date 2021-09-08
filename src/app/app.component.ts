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

  constructor(private productDataService: ProductDataService) {
  }

  showCart = true;

  showHideCart() {
    this.showCart = !this.showCart;
  }


  ngOnInit(): void {
    this.productDataService.CartObserver.subscribe((cart) => {
      this.cart = cart;
    });
  }
  clearCart = () => {
    this.productDataService.clearCart();
  }
}
