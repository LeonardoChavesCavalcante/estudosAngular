import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import {RouterModule,Routes } from "@angular/router";

import { MeuCadastroComponent } from "./meu-cadastro.component";
import { MeuCadastroService }  from "./meu-cadastro.service";
import { MeuCadastroDetalheComponent } from "./meu-cadastro-detalhe/meu-cadastro-detalhe.component";

@NgModule({
  declarations: [MeuCadastroComponent ,MeuCadastroDetalheComponent ],
  imports: [  FormsModule,CommonModule,HttpModule,
            RouterModule.forRoot([{
              path:"detalhes",
              component: MeuCadastroDetalheComponent
            }]) ],
  providers: [MeuCadastroService],
  exports:[MeuCadastroComponent,MeuCadastroDetalheComponent]
})
export class MeuCadastroModule { }
