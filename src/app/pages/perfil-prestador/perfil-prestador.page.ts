import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';
import { osPedido } from 'src/app/services/osPedido.model';

@Component({
  selector: 'app-perfil-prestador',
  templateUrl: './perfil-prestador.page.html',
  styleUrls: ['./perfil-prestador.page.scss'],
})
export class PerfilPrestadorPage implements OnInit {
 avaliacoes:any;
 mediaAvaliacao!: number;
 foto: any;
 urlFotoPerfil!: string;
tipoUser!: string;

  constructor(private apiService:ApiService) { }
  perfilPrestador: any;
  ngOnInit() {
     this.getAvaliacoesByIdPrestadoresAndRefresh();
     this. getFotoPerfilAndRefresh();
     this.tipoUser = this.apiService.getUserRole();
     this.apiService.getPerfisPrestadoresById().subscribe(
       (data) => {
          this.perfilPrestador = data;
          this.perfilPrestador.imgUrl = this.urlFotoPerfil     
        },
       (error) => {
          console.error('Erro ao obter perfil dos prestadores:', error);
        }
       );
  }

  onClickAgendar(){
    this.apiService.addPrestadorId(this.perfilPrestador.id);
  }


  private getAvaliacoesByIdPrestadoresAndRefresh() {
    this.apiService.getAvaliacoesByIdPrestadores().subscribe(
      (data) => {
        this.avaliacoes = data;
        this.mediaAvaliacao = this.avaliacoes
      },
      (error) => {
        console.error('Erro ao obter dados dos avaliacoes:', error);
      }
    );
  }

  private getFotoPerfilAndRefresh() {
    this.apiService.getFotoByIdPrestadores().subscribe(
      (data) => {
        this.foto = data;
        this.urlFotoPerfil = `assets/images/${this.foto.nomeArquivo}`
        
      },
      (error) => {
        console.error('Erro ao obter dados dos avaliacoes:', error);
      }
    );
  }
 
}
