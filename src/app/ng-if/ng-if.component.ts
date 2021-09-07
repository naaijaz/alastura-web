import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  sellectedVal:string="";

  getProductVal(selVal:any){
    console.log(selVal.target.value)
    this.sellectedVal=selVal.target.value;
  }
}
