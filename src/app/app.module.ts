
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../app/services/token.service';
import { AuthGuard } from './auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService} from '../app/services/auth.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getToken(); // Obter o token JWT do serviço TokenService
    },
    allowedDomains: ['http://localhost:8080'], // Substitua pelo(s) domínio(s) permitidos que podem receber o token
    disallowedRoutes: ['http://localhost:8080/auth/login'], // Substitua pela(s) rota(s) que não devem receber o token
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService]
      }
    }),
  ],
   
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard, AuthService, CookieService, TokenService, JwtHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
