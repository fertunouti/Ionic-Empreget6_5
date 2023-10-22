import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-read-usuarios',
  templateUrl: './read-usuarios.component.html',
  styleUrls: ['./read-usuarios.component.scss'],
})
export class ReadUsuariosComponent  implements OnInit {

  constructor(private apiService: ApiService, private tokenService:TokenService) { }
  usuarios!: any
  
  ngOnInit() {this.readUsuarios()}

  //Obtém perfil dos prestadores em apiService
  readUsuarios(): void {
     this.apiService.getDataUsuarios().subscribe(
     (data) => {
        this.usuarios = data;
      
      },
     (error) => {
        console.error('Erro ao obter dados dos usuarios:', error);
      }
     );
   }

  
}
