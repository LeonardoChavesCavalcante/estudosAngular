import { Component,Input } from "@angular/core";


@Component({
    selector:"meu-cabecalho",
    templateUrl:"./meu-cabecalho.component.html",
    styleUrls:["./meu-cabecalho.component.css"]
})
export class MeuCabecalhoComponent{
  @Input("texto") meuTexto:String;

    constructor(){
                
    }
    
}