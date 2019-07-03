import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { MyformsModule } from './myforms/myforms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    MyformsModule
    /*Aquí sólo declaramos los modulos, no las clases!! */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
