import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
    console.log(localStorage.getItem('user'));
  }

  fazerLogin(){ //SUBMIT
    // debugger
    let dataLogin = this.loginForm.getRawValue();

    this.authService.login(dataLogin).subscribe(
      dataServer => {
        if (dataServer.length > 0) {
          if(dataLogin.senha == dataServer[0].senha){

            delete dataServer[0].senha;
            localStorage.setItem('user', JSON.stringify(dataServer[0]))
            alert("Login realizado com sucesso")
            this.router.navigate(['/home']);

          }else{
            alert("Usuário e Senha Inválidas!")
          }
        }else{
          alert("usuario não cadastrado")
        }

      }
    )


  }

  fazerCadastro(){
    this.router.navigate(['/cadastro']);
  }

}
