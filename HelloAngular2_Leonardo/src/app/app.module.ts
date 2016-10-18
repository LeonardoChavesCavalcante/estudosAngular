import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MeuCabecalhoComponent } from './meu-cabecalho/meu-cabecalho.component';
import { MeuCadastroModule } from "./meu-cadastro/meu-cadastro.module";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    MeuCabecalhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MeuCadastroModule,
    routing
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

