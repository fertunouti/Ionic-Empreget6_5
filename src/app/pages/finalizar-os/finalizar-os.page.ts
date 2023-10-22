import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-finalizar-os',
  templateUrl: './finalizar-os.page.html',
  styleUrls: ['./finalizar-os.page.scss'],

})
export class FinalizarOsPage implements OnInit {

  private osFinalizadaSubscription: Subscription;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private apiService: ApiService,
    private eventService: EventService,
  ) {
    this.osFinalizadaSubscription = this.eventService.osFinalizada$.subscribe(() => {
      this.getPedidosByIdAndRefresh();
      this.getPedidosAndRefresh();
    });

  }
  tipoUser!: string
  idPedido!: number
  pedido!: any
  pedidos!: any


  ngOnInit() {
    this.tipoUser = this.apiService.getUserRole()
    this.idPedido = this.apiService.readId()
    this.getPedidosByIdAndRefresh()
    this.getPedidosAndRefresh();
    this.osFinalizadaSubscription = this.eventService.osFinalizada$.subscribe(() => {
       this.getPedidosByIdAndRefresh();
       this.getPedidosAndRefresh();
     });

  }
  ngOnDestroy() {
    // Cancelar a inscrição no observável para evitar vazamentos de memória
    this.osFinalizadaSubscription.unsubscribe();

  }
  async onClickFinalizarOS() {

    this.finalizaOSAndRefresh()
    const alert = await this.alertController.create({
      header: `Ordem de Serviço ${this.idPedido}`,
      message: 'Serviço Concluído. Obrigado!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.eventService.emitOSFinalizada();
            this.router.navigate(['/os-view']);
          },
        },
      ],
    });

    await alert.present();

    
  }


  private finalizaOSAndRefresh() {

    this.apiService.putFinalizarOS().subscribe(
      (data) => {
          this.getPedidosByIdAndRefresh();
          this.getPedidosAndRefresh();
          //Emite sinal de finalizado
         this.eventService.emitOSFinalizada();
      },
      (error) => {
        console.error('Erro FINALIZAR OS', error);
      }
    );
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

  private getPedidosAndRefresh() {
    this.apiService.getPedidos().subscribe(
      (data) => {
        this.pedidos = data;
      },
      (error) => {
        console.error('Erro ao obter dados dos pedidos:', error);
      }
    );
  }

}