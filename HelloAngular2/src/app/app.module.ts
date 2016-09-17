import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {MeuCabecalhoComponent} from "./meu-cabecalho/meu-cabecalho.component";

@NgModule({
  declarations: [
    AppComponent,
    MeuCabecalhoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
