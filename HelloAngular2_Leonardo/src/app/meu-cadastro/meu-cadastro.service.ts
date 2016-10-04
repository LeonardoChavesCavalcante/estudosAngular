import { Injectable } from "@angular/core";
import { Http ,Headers,Response} from "@angular/http";

import { Observable } from "rxjs";

import { Participante } from "./participante.model";

import 'rxjs/add/operator/map'


@Injectable()
export class MeuCadastroService{
  url:string = "http://localhost:3000/participantes";
  constructor(private http :Http){
  }

  getParticipantes(): Observable<Participante[]>{
     return this.http
                .get(this.url)
                .map(function(response:Response)
                      {
                        return response.json() as Participante[];
                      }
                   );

                //(resp:Response) => resp.json() as Participante[]
  }
  postParticipantes(participante:Participante):Observable<Participante>{
    return this.http.post(this.url,participante,[])
             .map((resp:Response) => resp.json() as Participante)
             ;
  }

  deleteParticipantes(id:Number):Observable<any>{
    return this.http.delete(this.url+ "/" +id.toString(),["Access-Control-Allow-Headers"]);

  }



}
