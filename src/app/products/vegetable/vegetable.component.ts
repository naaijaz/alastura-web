import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  constructor(public productDataService: ProductDataService) { }
  quantity1 = 1;
  data: any = [];
  ngOnInit(): void {
    this.data = this.productDataService.getProductData("Vegetables");
  }

  myCart: any

  getVal(Prodval: any) {
    let ProductValue: number = Prodval.innerHTML;
    this.myCart = Prodval.innerHTML;

    alert(Prodval.Name + " " + (Prodval.Quantity * Prodval.NewPrice))
  }

}


