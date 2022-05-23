import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { FutureWorksComponent } from './home/future-works/future-works.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./home/home.module')
  .then(rt=>rt.HomeModule)},
  {path:'services',loadChildren:()=>import('./services/services.module')
.then(rt=>rt.ServicesModule)},
{path:'',component:SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
