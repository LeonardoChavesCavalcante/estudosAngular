import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getPartipantes(){
    return [{nome:"Leonardo Chaves Cavalcante"},
            {nome:"Gilson"},
             {nome:"Fabão"}];
  }
}