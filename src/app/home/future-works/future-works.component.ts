import { Component, OnInit } from '@angular/core';
import { ApiserviseService } from 'src/app/apiservise.service';

@Component({
  selector: 'app-future-works',
  templateUrl: './future-works.component.html',
  styleUrls: ['./future-works.component.css']
})
export class FutureWorksComponent implements OnInit {
public user:any;
  constructor(private ser:ApiserviseService) { }

  ngOnInit(): void {
    this.ser.getuserdata().subscribe((res:any)=>{
      this.user=res;
      console.log(res);
      console.log(this.user)
    })
  }

}
