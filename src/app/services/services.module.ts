import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstConsultantComponent } from './const-consultant/const-consultant.component';
import { ReconstServiseComponent } from './reconst-servise/reconst-servise.component';
import { ArchitectureDesignComponent } from './architecture-design/architecture-design.component';
import { DesignComponent } from './design/design.component';
import { GreenBuildingComponent } from './green-building/green-building.component';
import { HouseRenovationComponent } from './house-renovation/house-renovation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { FilterPipe } from '../filter.pipe';


const route:Routes=[
  //{path:'',component:ConstConsultantComponent},
  {path:'reconstruction-servise',component:ReconstServiseComponent},
  {path:'architecture-design', component:ArchitectureDesignComponent},
  {path:'designand-construction',component:DesignComponent},
  {path:'green-buliding',component:GreenBuildingComponent},
  {path:'house-renovation',component:HouseRenovationComponent},

]
@NgModule({
  declarations: [
    ConstConsultantComponent,
    ReconstServiseComponent,
    ArchitectureDesignComponent,
    DesignComponent,
    GreenBuildingComponent,
    HouseRenovationComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    
  [RouterModule.forChild(route)]
  ]
  
})
export class ServicesModule { }
