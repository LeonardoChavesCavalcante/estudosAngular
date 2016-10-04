import { Injectable } from "@angular/core";
import { Http ,Headers,Response,} from "@angular/http";

import { Observable } from "rxjs";

import { Participante } from "./participante.model";

import 'rxjs/Rx';


@Injectable()
export class MeuCadastroService{
  url:string = "http://localhost:3000/participantes";
  headers :Headers = new Headers();
  constructor(private http :Http){
    this.headers.append("Content-Type", "application/json")
  }
  getParticipantes(): Observable<any>{
     return this.http
                .get(this.url)
                .map((resp:Response) => resp.json())
                .catch( (erro:any) => this.handleError(erro));
  }
  postParticipantes(participante:Participante):Observable<any>{
    return this.http.post(this.url,participante,[])
             .map((resp:Response) => resp.json() )
             .catch( (erro:any) =>  this.handleError(erro) );
  }
  putParticipantes(participante:Participante):Observable<any>{
    return this.http.put(this.url,participante,[])
             .map((resp:Response) => resp.json() )
             .catch( (erro:any) =>  this.handleError(erro) );
  }
  deleteParticipantes(id:Number):Observable<any>{
    console.log(this.headers);
    return this.http.delete(this.url+ "/" +id.toString(), {
                headers:this.headers,
                method:"DELETE",
                withCredentials: false
            })
            .catch( (erro:any) =>   this.handleError(erro) );;
  }
  handleError(error: any): any {
    console.log('Meu erro aqui');
  }
}

