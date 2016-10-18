import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from "@angular/core";
import { Router } from '@angular/router';

import { Participante } from "./participante.model";
import {MeuCadastroService} from "./meu-cadastro.service";

@Component({
    moduleId: module.id,
    selector: "meu-cadastro",
    templateUrl: "./meu-cadastro.component.html",
    styles: ["./meu-cadastro.component.css"]
})
export class MeuCadastroComponent implements OnInit {
    private nome: String = "";
    private participantes: Participante[] = [];

    constructor(private meuCadastroService: MeuCadastroService,
                private router: Router) {
    }

    incluir() {
        let participante: Participante = new Participante();
        participante.nome = this.nome;

        this.meuCadastroService.postParticipante(participante)
            .subscribe(resposta => this.participantes.push(resposta));
    }

    excluir(participante: Participante) {        
        this.meuCadastroService.deleteParticipantes(participante.id)
        .subscribe(resp => this.buscar());        
    }

    buscar() {
        this.meuCadastroService.getParticipantes()
            .subscribe(resp => this.participantes = resp);
    }

    editar(){
            this.router.navigate(["/detalhes"]);
        
    }
    
    ngOnInit() {
        this.buscar();
    }
}