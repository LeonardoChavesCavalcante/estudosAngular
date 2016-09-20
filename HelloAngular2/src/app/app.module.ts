import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuCabecalhoComponent } from './meu-cabecalho/meu-cabecalho.component';
import { MeuCadastroModule } from "./meu-cadastro/meu-cadastro.module";

@NgModule({
  declarations: [
    AppComponent,
    MeuCabecalhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MeuCadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
