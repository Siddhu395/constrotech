import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiserviseService } from 'src/app/apiservise.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //selval:any='';
  //items: MenuItem[] = [];
home:any;
main:any;
//sub:MenuItem[];
homemenu:any='';
home1:any
items1:any;
items2:any;
  public hmedata:any= [];

  constructor( private ser:ApiserviseService) { 
    
  }

  ngOnInit(): void {
    this.ser.getdata().subscribe((res:any)=>{
      console.log(res);
      //this.items=res;
      for(var value of res){
              console.log(value)
              this.main=value
              console.log(this.main.mainHeader)
              this.hmedata.push(this.main.mainHeader);
              // this.sub=this.main.subHeader
              // console.log(this.sub)
      }
      this.items1=res[0].subHeader;
      console.log(this.items1)
      this.items2=res[1].subHeader;
      console.log(this.items2);
console.log(this.hmedata)
    })
    //this.apidata=this.home1
    
  //   this.ser.getdata().subscribe((res:any)=>{
  //     console.log(res);
  //     for(var value of res){
  //       // console.log(value)
  //       // this.main=value
  //       // console.log(this.main.subHeader)
  //       // this.sub=this.main.subHeader
  //       // console.log(this.sub)


  //       console.log(value)
  //       this.main=value
  //       console.log(this.main.subHeader)
  //       this.sub=this.main.subHeader
  //       console.log(this.sub)


        
  //     }
  //     this.apidata=res[0];
  //     //console.log(this.main)
  //     console.log(this.apidata.subHeader[0])
  //     console.log(this.apidata)
  //     for(var val of this.apidata.subHeader){
  //       console.log(val);
  //       this.home=val;
  //     console.log(this.home.subheaderName)
  //       //console.log(this.home)

  //     }
  //     this.home1=this.home;
  //     console.log(this.home1)
      
  //     console.log(this.apidata)
  //     console.log(this.apidata.subheaderName)
  //     this.sub=this.apidata.subHeader
  //     console.log(this.sub)
  //     this.home=this.apidata.home;
  //     console.log(this.home)
  //       console.log(this.apidata.mainHeader)

  //       console.log(this.apidata.subHeader)
  //       this.main=res;
  //       console.log(this.main[2].mainHeader)
  //   })
    


  // 
}

}
