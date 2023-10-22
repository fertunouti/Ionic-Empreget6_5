import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-read-prestador',
  templateUrl: './read-prestador.component.html',
  styleUrls: ['./read-prestador.component.scss'],
})
export class ReadPrestadorComponent  implements OnInit {
  constructor(private apiService: ApiService, private tokenService: TokenService) { }
  prestadores: any = { conteudo: [] }; 
  foto: any;
  nomeFotoPerfil!: string;

  ngOnInit() {
    this.readPrestador();
  }
  readPrestador(): void {
    this.apiService.getDataPerfisPrestadores().subscribe(
      (data) => {
        this.prestadores = data;
        for (const prestador of this.prestadores.conteudo) {
          this.getImagemUrl(prestador.id);
        }
      },
      (error) => {
        console.error('Erro ao obter dados dos prestadores:', error);
      }
    );
  }

  onClick(prestadorId: number) {
    this.apiService.addPrestadorId(prestadorId);
  }

  getImagemUrl(id: number) {
    this.apiService.getFotoByIdListaPrestadores(id).subscribe(
      (data) => {
        this.foto = data;
        const imgUrl = `assets/images/${this.foto.nomeArquivo}`;
        const prestador = this.prestadores.conteudo.find((p: any) => p.id === id);
        if (prestador) {
          prestador.imgUrl = imgUrl;
        }
      },
      (error) => {
        console.error('Erro ao obter dados dos avaliacoes:', error);
      }
    );
  }
}
