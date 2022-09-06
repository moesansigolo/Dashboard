import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../login/usuario";

@Injectable(
  {
    providedIn: "root"
  }
)
export class LoginService{

  constructor(private http: HttpClient){

  }

  private readonly API_FAKE = 'http://localhost:3000'

  LoginUsuario(objeto:any){
    return this.http.get<Usuario[]>(`${environment.API_FAKE}/users`)
  }
}


