import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MeuCadastroComponent } from  "./meu-cadastro.component";


@NgModule({
  declarations: [MeuCadastroComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[MeuCadastroComponent],
  providers: []
})
export class MeuCadastroModule { }
