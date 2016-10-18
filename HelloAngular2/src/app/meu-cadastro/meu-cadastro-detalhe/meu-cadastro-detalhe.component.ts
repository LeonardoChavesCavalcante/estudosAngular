import {Component, AfterContentInit} from '@angular/core';
import { MeuCadastroService } from '../meu-cadastro.service';
import { Participante } from '../participante.model';

@Component({
  selector: 'meu-cadastro-detalhe',
  template: './meu-cadastro-detalhe.html'
})
export class MeuCadastroDetalheComponent implements AfterContentInit {

  private participante : Participante;

  constructor(private meuCadastroService:MeuCadastroService) {
    this.participante = new Participante();
  }

  ngAfterContentInit() {

  }
}
