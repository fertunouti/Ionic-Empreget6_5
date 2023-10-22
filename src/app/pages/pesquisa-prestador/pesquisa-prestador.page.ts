import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';
import { prestadorFilter } from 'src/app/services/prestadorFilter.model';

@Component({
  selector: 'app-pesquisa-prestador',
  templateUrl: './pesquisa-prestador.page.html',
  styleUrls: ['./pesquisa-prestador.page.scss'],
})
export class PesquisaPrestadorPage implements OnInit {

  constructor(private apiService: ApiService) { }
  emailUserAtual: string = '';
  nomePrestadorProcurado!: any;
  tipoUser!: string;
  prestadores!: any;
  mostraTodos!: boolean;
  mostraName!: boolean;
  mostraRegion!: boolean;
  foto: any;

  ngOnInit() {
    this.mostraTodos = true;
    this.mostraName = false;
    this.mostraRegion = false;
    this.tipoUser = this.apiService.getUserRole();
  }


  onMudouTermo(evento: any) {
    this.apiService.addTermo(evento.novoTermo);
    this.apiService.readByName().subscribe(prestadores => {
      this.prestadores = prestadores;
      // Iterar sobre os prestadores e obter a URL da imagem para cada um
      for (const prestador of this.prestadores.conteudo) {
        this.getImagemUrl(prestador.id);
      }
      this.mostraTodos = false;
      this.mostraName = true;
      this.mostraRegion = false;

    })
  }

  onMudouRegion(evento: any) {
    this.apiService.addRegion(evento.novaRegiao);
    this.apiService.readByRegion().subscribe(prestadores => {
      this.prestadores = prestadores;

      // Iterar sobre os prestadores e obter a URL da imagem para cada um
      for (const prestador of this.prestadores.conteudo) {
        this.getImagemUrl(prestador.id);

      }
      this.mostraTodos = false;
      this.mostraRegion = true;
      this.mostraName = false;
    })
  }
  onMostraTodos() {
    this.mostraTodos = true;
    this.mostraRegion = false;
    this.mostraName = false;
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
