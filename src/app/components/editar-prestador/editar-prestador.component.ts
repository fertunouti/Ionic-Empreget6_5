import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-editar-prestador',
  templateUrl: './editar-prestador.component.html',
  styleUrls: ['./editar-prestador.component.scss'],
})
export class EditarPrestadorComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private eventService: EventService,
    private http: HttpClient,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }


  tipoUser!: string;
  dataAtualizacao!: string;
  isLoggedIn!: boolean;
  prestadores: any = {};
  foto: any;
  imgUrl!: string;
  prefixo!: string;
  @Input() prestador: any = {};
  @Output() atualizarPrestador = new EventEmitter();

  ngOnInit() {
    console.log(this.apiService.readPrestadorId());
    this.tipoUser = this.apiService.getUserRole();
    this.isLoggedIn = this.apiService.readLoginStatus()
    this.apiService.getFotoByIdListaPrestadores(this.apiService.readPrestadorId()).subscribe(
      (data) => {
        this.foto = data
        console.log(data.nomeArquivo)
        this.imgUrl = `assets/images/${this.foto.nomeArquivo}`
      }
    );


    this.apiService.getDataPerfisPrestadores().subscribe(
      (data) => {
        this.prestador = data.conteudo[0];
        console.log(this.prestador)
        this.dataAtualizacao = data.conteudo[0].dataDaAtualizacao;
      },
      (error) => {
        console.error('Erro ao obter perfil dos prestadores:', error);
      }
    );
  }
  onMudouNome(evento: KeyboardEvent) {
    this.prestador.nome = ((<HTMLInputElement>evento.target).value);
    console.log(this.prestador);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouRG(evento: KeyboardEvent) {
    this.prestador.rg = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouCPF(evento: KeyboardEvent) {
    this.prestador.cpf = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudoulogradouro(evento: KeyboardEvent) {
    this.prestador.endereco.logradouro = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouNumero(evento: KeyboardEvent) {
    this.prestador.endereco.numero = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouComplemento(evento: KeyboardEvent) {
    this.prestador.endereco.complemento = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouCep(evento: KeyboardEvent) {
    this.prestador.endereco.cep = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouBairro(evento: KeyboardEvent) {
    this.prestador.endereco.bairro = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouCidade(evento: KeyboardEvent) {
    this.prestador.endereco.cidade = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouEstado(evento: KeyboardEvent) {
    this.prestador.endereco.estado = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouPais(evento: KeyboardEvent) {
    this.prestador.endereco.pais = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouTelefone(evento: KeyboardEvent) {
    this.prestador.telefone = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouDescricao(evento: KeyboardEvent) {
    this.prestador.servico.descricao = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouValor(evento: KeyboardEvent) {
    this.prestador.servico.valor = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouObservacao(evento: KeyboardEvent) {
    this.prestador.observacao = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouRegiao(evento: KeyboardEvent) {
    this.prestador.regiao = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }
  onMudouDisponibilidade(evento: KeyboardEvent) {
    this.prestador.disponibilidade = ((<HTMLInputElement>evento.target).value);
    this.atualizarPrestador.emit(this.prestador);
  }

}
