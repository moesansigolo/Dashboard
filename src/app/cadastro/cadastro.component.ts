import { AuthService } from './../login/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {

    this.registerForm = formBuilder.group({

      nome: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }

  submit() {
      let dataRegister = this.registerForm.getRawValue();

    this.authService.register(dataRegister).subscribe((dataServer) => {
      console.log(dataServer);

    });
  }
}
