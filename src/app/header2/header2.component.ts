import { Component, OnInit } from '@angular/core';
import { ApiserviseService } from '../apiservise.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private ser:ApiserviseService) { }

  ngOnInit(): void {
    this.ser.getdata().subscribe((res:any)=>
    {
      
    })
  }

}
