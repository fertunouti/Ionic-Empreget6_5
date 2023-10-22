
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/apiService';
import { Avaliacao } from 'src/app/services/avaliacao.model';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {
  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private alertController:AlertController
    ) { }
  tipoUser: any
  idPedido!: number
  pedido: any
  pedidos: any
  avaliacoes: any
  valorAvaliacao!: number | null
  avaliacao: Avaliacao = {
    estrelas: null,
    comentario: ''
  }
  token!: string

  ngOnInit() {
    this.valorAvaliacao = 0
    this.tipoUser = this.apiService.getUserRole()
    this.idPedido = this.apiService.readId()
    this.token = this.apiService.getToken()

    this.getPedidosByIdAndRefresh()
    this.getAvaliacoesByIdOSAndRefresh()
  }

  mudouAvaliacao(event: number) {
    this.valorAvaliacao = event
  }

  onClickInicio() {
    this.apiService.addCurrentPage(0)
    this.router.navigateByUrl('/hello');
  }

  onClickAvaliacao() {
    this.avaliacao.estrelas = this.valorAvaliacao
    this.apiService.postAvaliacaoByIdOS(this.avaliacao).subscribe(
      (response: any) => { 
        this.mostrarAlerta('Avaliação concluída!! Obrigado!!!');
          },
          (error) => {
            this.mostrarAlerta('Erro! Revise os dados');   

          } );
  }

  private getPedidosByIdAndRefresh() {
    this.apiService.getByIdPedido().subscribe(
      (data) => {
        this.pedido = data;
      },
      (error) => {
        console.error('Erro ao obter dados dos pedidos:', error);
      }
    );
  }

  private getPedidosPageAndRefresh() {
    this.apiService.getPedidosPage().subscribe(
      (data) => {
        this.pedidos = data;
      },
      (error) => {
        console.error('Erro ao obter dados dos pedidos:', error);
      }
    );
  }
  private getAvaliacoesByIdOSAndRefresh() {
    this.apiService.getAvaliacoesByIdOS().subscribe(
      (data) => {
        this.avaliacoes = data;
      },
      (error) => {
        console.error('Erro ao obter dados dos avaliacoes:', error);
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
}


