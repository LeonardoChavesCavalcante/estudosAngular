import { Injectable } from "@angular/core";
import { Http, Headers, Response} from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/rx";

import { Participante } from "./participante.model";

@Injectable()
export class MeuCadastroService {
    private urlParticipantes: string = "http://localhost:3000/participantes";
    private headers: Headers = new Headers();
    private requestOptions = { headers: this.headers };    


    constructor(private http: Http) {
        this.headers.append("Content-Type", "application/json");
        this.requestOptions.headers = this.headers;
    }

    getParticipantes(): Observable<any> {
        return this.http.get(this.urlParticipantes, {})
            .map((resposta: Response) => resposta.json())
            .catch(erro => this.tratarErro(erro));
    }

    postParticipante(participante: Participante): Observable<any> {
        return this.http.post(this.urlParticipantes,
            participante, this.requestOptions)
            .map((resposta: Response) => resposta.json())
            .catch(erro => this.tratarErro(erro));
    }

    putParticipantes(participante: Participante): Observable<any> {
        return this.http.put(this.urlParticipantes, participante, this.requestOptions)
            .map((resp: Response) => resp.json())
            .catch((erro: any) => this.tratarErro(erro));
    }

    deleteParticipantes(id: Number): Observable<any> {
        return this.http.delete(this.urlParticipantes + "/" + id.toString(), this.requestOptions)
            .catch((erro: any) => this.tratarErro(erro));
    }

    tratarErro(erro: any): any {
        console.log("Meu ero");
    }

}