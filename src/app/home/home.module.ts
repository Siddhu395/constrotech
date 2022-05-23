import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FutureWorksComponent } from './future-works/future-works.component';
import { OffersComponent } from './offers/offers.component';


const  route:Routes=[
  
  {path:'futureworks',component:FutureWorksComponent},
  {path:'offers',component:OffersComponent},
  //{path:'',component:SliderComponent}
  {path:'aboutus',component:AboutusComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  [RouterModule.forChild(route)]
  ]
})
export class HomeModule { }
