import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule} from "@angular/http";


import { MeuCadastroComponent } from "./meu-cadastro.component";
import { MeuCadastroService } from "./meu-cadastro.service";

@NgModule({
  declarations: [MeuCadastroComponent  ],
  imports: [  FormsModule,CommonModule,HttpModule],
  providers: [MeuCadastroService],
  exports:[MeuCadastroComponent]
})
export class MeuCadastroModule { }
