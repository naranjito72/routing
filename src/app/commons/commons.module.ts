import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, NotfoundComponent, HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, NotfoundComponent, HomeComponent, HeaderComponent]
})
export class CommonsModule { }
