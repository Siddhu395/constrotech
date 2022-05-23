import { Component, OnInit } from '@angular/core';
import { ApiserviseService } from 'src/app/apiservise.service';

@Component({
  selector: 'app-reconst-servise',
  templateUrl: './reconst-servise.component.html',
  styleUrls: ['./reconst-servise.component.css']
})
export class ReconstServiseComponent implements OnInit {
user :any;
filterrolestring:string='';
userdat:any;
filterText:string=''
selectrole:any='';


  constructor(private ser:ApiserviseService) { }

  ngOnInit(): void {
    this.filterdata();
  }
filterdata(){
  this.ser.getuserdata().subscribe((res:any)=>{
    this.user=res;
   
    
    
   
  })
}
selectedvalue(){
  console.log(this.selectrole)
}


  
}
