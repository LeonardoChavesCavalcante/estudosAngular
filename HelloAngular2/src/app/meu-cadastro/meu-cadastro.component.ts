import { Component,OnInit,OnChanges,OnDestroy,DoCheck } from "@angular/core";

import { Participante } from "./participante.model";

@Component({
    selector:"meu-cadastro",
    templateUrl:"./meu-cadastro.component.html",
    styles:["./meu-cadastro.component.css"]
}) 
export class MeuCadastroComponent implements OnInit{
    private nome:String ="";
    private participantes: Participante[] = [];

    incluir(){
       let participante: Participante = new Participante();
       participante.nome = this.nome;
       this.participantes.push(participante);              
    }
    excluir(participante:Participante){        
        this.participantes.splice(this.participantes.indexOf(participante),1);
    }
    ngOnInit(){
        console.log("init");
    }
}