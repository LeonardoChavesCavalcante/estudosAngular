import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule} from "@angular/http";

import { MeuCadastroComponent } from "./meu-cadastro.component";
///import { MeuCadastroDetalheComponent } from "./meu-cadastro-detalhe/meu-cadastro-detalhe.component";
import { MeuCadastroService } from "./meu-cadastro.service";
import { routing } from "./meu-cadastro.routing";

@NgModule({
  declarations: [MeuCadastroComponent],
  imports: [  FormsModule,CommonModule,HttpModule,routing],
  providers: [MeuCadastroService],
  exports:[MeuCadastroComponent]
})
export class MeuCadastroModule { }

