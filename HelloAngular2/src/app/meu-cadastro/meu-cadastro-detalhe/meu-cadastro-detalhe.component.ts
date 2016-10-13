import { Component, OnInit } from '@angular/core';

import {MeuCadastroService} from "../meu-cadastro.service";

@Component({
    selector: 'meu-cadastro-detalhe',
    templateUrl: 'meu-cadastro-detalhe.component.html'
})
export class MeuCadastroDetalheComponent implements OnInit {
    constructor(private meuCadastroService: MeuCadastroService) { }

    atualizar() {
        
    }

    ngOnInit() {
        console.log("aqui");
        
    }
}