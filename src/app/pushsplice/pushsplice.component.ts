import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pushsplice',
  templateUrl: './pushsplice.component.html',
  styleUrls: ['./pushsplice.component.css']
})
export class PushspliceComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  
  users:any=[];
  onCreateUser(uname:any){
    this.users.push({
          name:uname.value
        });
if(this.users.length>3){
 this.router.navigate(['home'])
}

//  if(uname.value==""){
//    alert('please fill data')
//  }else{
//   this.users.push({
//     name:uname.value
//   });
//  }


}


  onremove(){
this.users.splice(this.users.length-1)
  }
  onremoveitem(item:any){
this.users.splice(item,1)
  }
  
}