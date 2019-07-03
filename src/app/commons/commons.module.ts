import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, HomeComponent, NotfoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NavbarComponent, HomeComponent, NotfoundComponent]
})
export class CommonsModule { }
