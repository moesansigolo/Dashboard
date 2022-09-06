import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  // mostrarMenuEmiter = new EventEmitter<boolean>();
  // desabilitarBotao = true;

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  // fazerLogin(usuario: Usuario){
  //   if (usuario.nome === 'usuario@email.com.br' && usuario.senha === '123456789') {
  //     this.usuarioAutenticado = true;
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Login realizado com sucesso',
  //       showConfirmButton: false,
  //       timer: 1500
  //     })
  //     this.mostrarMenuEmiter.emit(true)
  //     this.router.navigate(['/home'])

  //   }else{
  //     this.usuarioAutenticado = false;
  //     this.mostrarMenuEmiter.emit(false);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'E-mail ou senha inválidos',

  //     })
  //   }
  // }

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
