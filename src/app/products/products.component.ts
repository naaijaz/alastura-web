import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public productDataService: ProductDataService) { }
  quantity1 = 1;
  data: any = [];
  category: any = "Vegetables";
  ngOnInit(): void {
    this.data = this.productDataService.getProductData(this.category);
    this.activatedRoute.queryParams.subscribe(params => {
      let category = params['category'];
      if (category) {
        this.category = category;
        console.log(category); // Print the parameter to the console. 
        this.data = this.productDataService.getProductData(category);
      }
    });
  }

  myCart: any

  getVal(Prodval: any) {
    let ProductValue: number = Prodval.innerHTML;
    this.myCart = Prodval.innerHTML;

    prompt(Prodval.Name + " " + (Prodval.Quantity * Prodval.NewPrice))
  }

}

