import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext'
import {} from 'primeng/api';
import { Header2Component } from './header2/header2.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    FormsModule

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
