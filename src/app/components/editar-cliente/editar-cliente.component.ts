import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/apiService';
import * as moment from 'moment-timezone';


import { EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss'],
})
export class EditarClienteComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private eventService: EventService,
    private http: HttpClient,
    private navCtrl: NavController,
    private alertController: AlertController,

  ) { }

  tipoUser!: string
  isLoggedIn!: boolean;
  clientes: any = {}
  dataAtualizacao: any
  @Input() cliente: any;
  @Output() atualizarCliente = new EventEmitter();

  ngOnInit() {
    console.log(this.apiService.readClienteId())
    this.tipoUser = this.apiService.getUserRole();
    this.isLoggedIn = this.apiService.readLoginStatus()
    this.apiService.getDataPerfisClientes().subscribe(
      (data) => {
        this.cliente = data[0];
        this.dataAtualizacao = this.apiService.converterDataAtualizacao(data[0].dataDaAtualizacao)

        console.log(this.dataAtualizacao);


      },
      (error) => {
        console.error('Erro ao obter perfil dos prestadores:', error);
      }
    );
  }
  onMudouNome(evento: KeyboardEvent) {
    this.cliente.nome = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);
  }
  onMudouRG(evento: KeyboardEvent) {
    this.cliente.rg = ((<HTMLInputElement>evento.target).value);
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouCPF(evento: KeyboardEvent) {
    this.cliente.cpf = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);
  }
  onMudouEnderecoLogradouro(evento: KeyboardEvent) {
    this.cliente.endereco.logradouro = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);
  }
  onMudouEnderecoNumero(evento: KeyboardEvent) {
    this.cliente.endereco.numero = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouEnderecoComplemento(evento: KeyboardEvent) {
    this.cliente.endereco.complemento = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouEnderecoCep(evento: KeyboardEvent) {
    this.cliente.endereco.cep = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouEnderecoBairro(evento: KeyboardEvent) {
    this.cliente.endereco.bairro = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouEnderecoCidade(evento: KeyboardEvent) {
    this.cliente.endereco.cidade = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouEnderecoEstado(evento: KeyboardEvent) {
    this.cliente.endereco.estado = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouEnderecoPais(evento: KeyboardEvent) {
    this.cliente.endereco.pais = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);

  }
  onMudouTelefone(evento: KeyboardEvent) {
    this.cliente.telefone = ((<HTMLInputElement>evento.target).value);
    console.log(this.cliente.endereco)
    this.atualizarCliente.emit(this.cliente);
  }

}
