import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/apiService';
import { Prestadores } from 'src/app/services/prestador.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-prestador',
  templateUrl: './cadastro-prestador.page.html',
  styleUrls: ['./cadastro-prestador.page.scss'],
})
export class CadastroPrestadorPage implements OnInit {
   
 prefixo: string = ''
 senhaRepetida: string = '';

 isLoggedIn!: boolean;
 prestador: Prestadores = {
    nome: '',
    imgUrl: null,
    endereco: {
      logradouro: '',
      numero: null,
      complemento: '',
      cep: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: ''
    },
    regiao: '',
    rg: '',
    cpf: '',
    telefone: '',
    usuario: {
      email: '',
      senha: '',
      role: ''
    },
    servico: {
      descricao: '',
      valor: ''
  },

  disponibilidade: '',
  observacao: ''
  }
  constructor(
    private apiService:ApiService,
    private alertController: AlertController,
    private navCtrl: NavController) {  
  }
  
  ngOnInit() {
    this.isLoggedIn = this.apiService.readLoginStatus()

  }
  onClickCancelar(){
   // this.apiService.setUserRole('');
   this.navCtrl.navigateBack('/loading');
  }
onClick() {
  if (!this.validarSenhas()) {
    return; // Retorna se as senhas não forem válidas
  }
  
  if (!this.validarFormatoValor()) {
    return; // Retorna se o formato do valor não for válido
  }
  
  this.prestador.usuario.role = this.apiService.getUserRole()
  this.prestador.endereco.logradouro= this.prefixo +' '+ this.prestador.endereco.logradouro
  this.apiService.postCadastrarPrestador(this.prestador).subscribe(
     (response: any) => { 
      console.log("CLIENTE cadastrado com sucesso!!!");
      this.mostrarAlerta('Cadastro concluído com sucesso.');
      this.navCtrl.navigateBack('/hello');
      this.resetValoresIniciais();
    },
    
    (error) => {
      console.error("Erro ao cadastrar: ", error);
      this.mostrarAlerta('Erro ao cadastrar. Verifique os dados e tente novamente.');
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

validarSenhas() {
  if (this.prestador.usuario.senha.length < 6) {
    this.mostrarAlerta('A senha deve ter pelo menos 6 caracteres.');
    return false;
  }

  if (this.prestador.usuario.senha !== this.senhaRepetida) {
    this.mostrarAlerta('As senhas não coincidem.');
    return false;
  }

  return true;
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

resetValoresIniciais(){
  this.prestador = {nome: '',
  imgUrl: null,
  endereco: {
    logradouro: '',
    numero: null,
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: ''
  },
  regiao: '',
  rg: '',
  cpf: '',
  telefone: '',
  usuario: {
    email: '',
    senha: '',
    role: ''
  },
  servico: {
    descricao: '',
    valor: ''
},

disponibilidade: '',
observacao: ''};
this.senhaRepetida = '';
}

// Função chamada quando o formulário for submetido
onSubmit() {
  
    // Lógica para processar o formulário
  }
}



