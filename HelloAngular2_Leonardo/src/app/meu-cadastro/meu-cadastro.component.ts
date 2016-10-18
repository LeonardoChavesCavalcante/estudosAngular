import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from "@angular/core";

import { Participante } from "./participante.model";
import { MeuCadastroService } from "./meu-cadastro.service";


@Component({
  selector: "meu-cadastro",
  templateUrl: "./meu-cadastro.component.html",
  styles: ["./meu-cadastro.component.css"]
})
export class MeuCadastroComponent implements OnInit {

  constructor(private meuCadastroService: MeuCadastroService) {
  }

  private nome: String = "";
  private participantes: Participante[] = [];

  incluir() {
    let participante: Participante = new Participante();
    participante.nome = this.nome;

    this.meuCadastroService.postParticipantes(participante)
      .subscribe(resp => this.participantes.push(resp));
  }
  excluir(participante: Participante) {
    this.meuCadastroService.deleteParticipantes(participante.id)
      .subscribe(resp => this.buscarParticipantes());
  }
  buscarParticipantes() {
    this.meuCadastroService.getParticipantes()
      .subscribe( resp => this.participantes = resp);

  }
  ngOnInit() {
  //  this.buscarParticipantes();
  }
}
