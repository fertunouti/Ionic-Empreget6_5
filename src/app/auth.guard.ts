
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {

  /* ESTA CLASSE QUE GARANTE A AUTENTICAÇÃO NÃO FUNCIONOU, PERDE A ROTA */

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isUserAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  private isUserAuthenticated(): boolean {

    const token = this.authService.getTokenFromCookie();

    if (token) {
      const decodedToken: any = jwt_decode(token);

      // Verifique a expiração do token
      const tokenExpirationDate = new Date(0); // Inicializa com data mínima
      tokenExpirationDate.setUTCSeconds(decodedToken.exp);

      // Verifique se o token expirou
      if (new Date() < tokenExpirationDate) {
        // Verifique a Role presente no token
        const role = decodedToken.sub.split(';')[1];

        if (role === 'CLIENTE') {
          this.router.navigate(['/home']);
        } else if (role === 'PRESTADOR') {
          this.router.navigate(['/tela-inicial-prestador']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['/home']);
        }
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}