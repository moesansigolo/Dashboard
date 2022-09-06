import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuarioNaoEstaAutenticado: boolean = false;

  constructor( private http: HttpClient ) { }

  login(values: {email: string, password: string}){
    return this.http.get<Usuario[]>(`${environment.API_FAKE}/users?email_like=` + values.email);
  }

  register(usuario: Usuario){
    return this.http.post<Usuario>(`${environment.API_FAKE}/users`, usuario);
  }

  clear() {
    localStorage.clear()
  }

  usuarioEstaAutenticado(){
    return (localStorage.getItem('user') !== null ? true : false);

  }

  logout() {
    this.clear();
  }
}
