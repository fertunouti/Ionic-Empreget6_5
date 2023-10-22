import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  isLogout!: boolean 

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, senha: string): Observable<any> {
    const body = { email: email, senha: senha };
    return this.http.post<any>(`${this.baseUrl}/auth/login`, body);
  }

  setTokenCookie(token: string): void {
    const cookieOptions: any = {
      httpOnly: true,
      sameSite: 'Strict'
    };
    // Configura o cookie com o nome "jwt_token" e o valor do token recebido
    // O último parâmetro { httpOnly: true } configura o cookie como HttpOnly
    this.cookieService.set('jwt_token', token, undefined, undefined, undefined, undefined, cookieOptions);
  }

  getTokenFromCookie(): string {
    // Obtém o valor do token do cookie
    return this.cookieService.get('jwt_token');
  }

  logout(): void {
    // Remova o token de autenticação (exemplo usando LocalStorage)
    localStorage.removeItem('jwt_token');
    this.cookieService.delete('jwt_token')
    this.isLogout = true
    
    window.location.href = '/home'; // Redirecionar para a página de publica
  }
}
