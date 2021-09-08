import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1920/500`);
  cart: any = [];
  constructor(private productDataService: ProductDataService) {

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
