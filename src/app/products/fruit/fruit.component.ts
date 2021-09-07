import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor(public productDataService: ProductDataService) { }
  quantity1 = 1;
  data: any = [];
  ngOnInit(): void {
    this.data = this.productDataService.getProductData("Fruits");
  }

  myCart: any

  getVal(Prodval: any) {
    let ProductValue: number = Prodval.innerHTML;
    this.myCart = Prodval.innerHTML;

    alert(Prodval.Name + " " + (Prodval.Quantity * Prodval.NewPrice))
  }

}


