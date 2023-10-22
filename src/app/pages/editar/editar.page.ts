import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {


  
  
  constructor(
    private apiService: ApiService,
    private eventService: EventService,
    private http: HttpClient,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { 
    
  }

  tipoUser!: string
  isLoggedIn!: boolean;
  clientes: any = {}
  dataAtualizacao!: string
  cliente : any ={};
  
 prestadores: any ={}
prestador :any

foto: any
imgUrl!: string
prefixo!:string

 ngOnInit() {
    console.log(this.apiService.readClienteId())
    console.log(this,this.apiService.readPrestadorId())
    this.tipoUser = this.apiService.getUserRole();
    
    this.isLoggedIn = this.apiService.readLoginStatus()
    // this.apiService.getDataPerfisClientes().subscribe(
    //   (data) => {
    //     this.cliente = data[0];
    //     this.dataAtualizacao = data[0].dataDaAtualizacao

    //     console.log(this.cliente)
    //   },
    //   (error) => {
    //     console.error('Erro ao obter perfil dos prestadores:', error);
    //   }
    // );
    


  }

 

  onClickSalvar() {
    const clienteEditado = {
      nome: this.cliente.nome,
      imgUrl: this.cliente.imgUrl,
      endereco: {
        logradouro: this.cliente.endereco.logradouro,
        numero: this.cliente.endereco.numero,
        complemento: this.cliente.endereco.complemento,
        cep: this.cliente.endereco.cep,
        bairro: this.cliente.endereco.bairro,
        cidade: this.cliente.endereco.cidade,
        estado: this.cliente.endereco.estado,
        pais: this.cliente.endereco.pais
      },
      rg: this.cliente.rg,
      cpf: this.cliente.cpf,
      telefone: this.cliente.telefone,
    }

  
    this.apiService.putEditarCliente(clienteEditado).subscribe(
      (response: any) => {
        this.eventService.emitCadastroAtualizado();//Emite sinal de cadastrado
        this.mostrarAlerta('Cadastro atualizado!');
        this.navCtrl.navigateBack('/hello');

      },

      (error) => {
        console.error("Erro ao cadastrar: ", error);
        this.mostrarAlerta('Erro no cadastro. Verifique os dados e tente novamente.');
        // Você pode adicionar mais tratamento de erro conforme necessário, como reverter as alterações, etc.
      }
    );
  }

  onClickSalvarPrestador(){
    const prestadorEditado = {
      nome: this.prestador.nome,
      endereco: {
          logradouro: this.prestador.endereco.logradouro,
          numero: this.prestador.endereco.numero,
          complemento: this.prestador.endereco.complemento,
          cep:this.prestador.endereco.cep,
          bairro: this.prestador.endereco.bairro,
          cidade: this.prestador.endereco.cidade,
          estado: this.prestador.endereco.estado,
          pais: this.prestador.endereco.pais
      },
      regiao: this.prestador.regiao,
      rg: this.prestador.rg,
      cpf: this.prestador.cpf,
      telefone: this.prestador.telefone,
      servico: {
          descricao: this.prestador.servico.descricao,
          valor:this.prestador.servico.valor
      },
      
      observacao: this.prestador.observacao,
      disponibilidade: this.prestador.disponibilidade,
    }
    
    if (!this.validarFormatoValor()) {
      return; // Retorna se o formato do valor não for válido
    }
    
   
    this.apiService.putEditarPrestador(prestadorEditado).subscribe(
       (response: any) => { 
        console.log("Cadastro atualizado!");
        this.eventService.emitCadastroAtualizado();//Emite sinal de cadastrado
        this.mostrarAlerta('Cadastro atualizado!');
        this.navCtrl.navigateBack('/hello');
        
      },
      
      (error) => {
        console.error("Erro ao cadastrar: ", error);
        this.mostrarAlerta('Erro no cadastro. Verifique os dados e tente novamente.');
        // Você pode adicionar mais tratamento de erro conforme necessário, como reverter as alterações, etc.
      }
      );
   }
   


  async mostrarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
  onClickCancelar() {
    // this.apiService.setUserRole('');
    console.log(this.isLoggedIn)
    this.navCtrl.navigateBack('/hello');
  }

  validarFormatoValor(): boolean {
    const formatoValido = /^\d+(\.\d{1,2})?$/.test(this.prestador.servico.valor);
    if (!formatoValido) {
      this.mostrarAlerta('O valor do serviço deve estar no formato ###.##');
    }
    return formatoValido;
  }

  validarFormatoRG(): boolean {
    const formatoValido = /^\d{1,9}$/.test(this.cliente.rg);
    if (!formatoValido) {
      this.mostrarAlerta('O valor do RG deve ter até 9 digitos');
    }
    return formatoValido;
  }

  mudouCliente(evento: any) {
    this.cliente = evento;
  }
  mudouPrestador(evento: any) {
    this.prestador = evento;
  }

}


