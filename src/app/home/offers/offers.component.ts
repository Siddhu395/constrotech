import { Component, OnInit } from '@angular/core';
import { ApiserviseService } from 'src/app/apiservise.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private ser:ApiserviseService) { }

  ngOnInit(): void {
  }

}
