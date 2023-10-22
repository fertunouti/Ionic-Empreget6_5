import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-editar-prest',
  templateUrl: './editar-prest.page.html',
  styleUrls: ['./editar-prest.page.scss'],
})
export class EditarPrestPage implements OnInit {



constructor(
  private apiService:ApiService,
   private eventService:EventService, 
   private http: HttpClient,
   private navCtrl:NavController,
   private alertController:AlertController

   ) { }
tipoUser! : string
dataAtualizacao!: string
isLoggedIn!: boolean;  
prestadores: any ={}
prestador = {
  id: null,
  nome: '',
  endereco: {
      logradouro: '',
      numero: null,
      complemento: '',
      cep:'',
      bairro: '',
      cidade: '',
      estado: '',
      pais: ''
  },
  regiao: '',
  rg: '',
  cpf: '',
  telefone: '',
  servico: {
      descricao: '',
      valor: ''
  },
  
  observacao: '',
  disponibilidade: '',
}

foto: any
imgUrl!: string
prefixo!:string
ngOnInit() {
  //   console.log(this.apiService.readPrestadorId())
  //   this.tipoUser = this.apiService.getUserRole();
  //   this.isLoggedIn = this.apiService.readLoginStatus()
  //    this.apiService.getFotoByIdListaPrestadores(this.apiService.readPrestadorId()).subscribe(
  //      (data) => {  this.foto = data
  //        console.log(data.nomeArquivo)
  //        this.imgUrl = `assets/images/${this.foto.nomeArquivo}`
  //      }
  //   );
    

  //   this.apiService.getDataPerfisPrestadores().subscribe(
  //     (data) => {
  //        this.prestador = data.conteudo[0];
  //        console.log(this.prestador)
  //       this.dataAtualizacao = data.conteudo[0].dataDaAtualizacao;
  //      },
  //     (error) => {
  //        console.error('Erro ao obter perfil dos prestadores:', error);
  //      }
  //     );

    
   }
  onClickSalvar(){
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
  onClickCancelar(){
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
    const formatoValido = /^\d{1,9}$/.test(this.prestador.rg);
    if (!formatoValido) {
      this.mostrarAlerta('O valor do RG deve ter até 9 digitos');
    }
    return formatoValido;
  }
   
  }
