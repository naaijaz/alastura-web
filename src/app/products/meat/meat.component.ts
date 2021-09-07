import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wasingmachine',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {

  constructor() { }
  quantity1=1;
  ngOnInit(): void {
  }
  
getVal(Prodval:any){
alert(Prodval.innerHTML);
let ProductValue:number = Prodval.innerHTML;

  }
}
