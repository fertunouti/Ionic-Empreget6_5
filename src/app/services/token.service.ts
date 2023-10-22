// token.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) { }

  getToken(): string | null {
    return this.cookieService.get('access_token');
  }

  // Método para definir o token JWT no cookie
  setToken(token: string): void {
    // Definir o cookie com o nome "access_token" e o valor do token recebido
    this.cookieService.set('access_token', token, undefined, '/');
  }

  // Método para remover o token JWT do cookie
  removeToken(): void {
    this.cookieService.delete('access_token', '/');
  }
}
