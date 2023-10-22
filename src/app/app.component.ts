import { CadastroPageModule } from './pages/cadastro/cadastro.module';
import { HomePageModule } from './pages/home/home.module';

import { Component, OnInit } from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/hello', icon: 'home' },
    { title: 'Alterar perfil', url: '/editar', icon: 'person' },
    //{ title: 'Favoritos', url: '#', icon: 'heart' },
    { title: 'Agendamentos', url: '/historico-agendamentos', icon: 'bag' },
    //{ title: 'Ajuda', url: '#', icon: 'help-circle' },
    { title: 'Sobre o app', url: '/sobre-app', icon: 'warning' },
    { title: 'Sair', url: '/logout', icon: 'log-out' },
  ];

  constructor() {
  
  }
 
}