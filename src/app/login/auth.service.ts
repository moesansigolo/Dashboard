import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmiter = new EventEmitter<boolean>();
  desabilitarBotao = true;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'usuario@email.com.br' && usuario.senha === '123456789') {
      this.usuarioAutenticado = true;
      this.desabilitarBotao = false;

      // this.mostrarMenuEmiter.emit(true)
      this.router.navigate(['/'])

    }else{
      this.usuarioAutenticado = false;
      // this.mostrarMenuEmiter.emit(false);
      this.desabilitarBotao = true
    }
  }
}
