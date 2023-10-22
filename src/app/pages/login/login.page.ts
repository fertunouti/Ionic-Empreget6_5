import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/apiService';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';
  
  @Output() mudouLogin = new EventEmitter()

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router) { }

  onLogin(): void {
    const { email, senha } = this;
    this.authService.login(email, senha).subscribe(
      (response: any) => {
        const decodedToken: any = jwt_decode(response.token);
        const role = decodedToken.sub.split(';');
        const userEmail = role[0];
        const userRole = role[1];
        const statusLogin = true
        this.apiService.setUserRole(userRole);
        this.apiService.addEmail(userEmail)
        this.apiService.addLoginStatus(statusLogin);

        //Aciona envento onLogin() na HomePage html
        this.mudouLogin.emit({ loginSucesso: true })
        // Configurar o token JWT no ApiService
        this.apiService.setAuthToken(response.token);
        // Defina o token JWT como um cookie
        this.setTokenCookie(response.token);
      },
      (error: any) => {
        console.error('Erro no login:', error);
        //this.mudouLogin.emit({loginErro:true})
      }
    );
  }

private setTokenCookie(token: string): void {
    // Defina o cookie com o nome "jwt_token" e o valor do token recebido
    document.cookie = `jwt_token=${token}; path=/; HttpOnly`;
  }

  ngOnInit(): void { this.apiService.addLoginStatus(false);
  }

}
