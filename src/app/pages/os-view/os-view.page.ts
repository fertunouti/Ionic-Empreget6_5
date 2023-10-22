import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.page.html',
  styleUrls: ['./os-view.page.scss'],
})
export class OsViewPage implements OnInit, OnDestroy , OnChanges {
  
  private osCadastradaSubscription: Subscription;
  private osCanceladaSubscription: Subscription;
  private osAceiteSubscription: Subscription;
  private osRecusadaSubscription: Subscription;
  private osFinalizadaSubscription: Subscription;
  
  
  constructor(
    private apiService: ApiService,
    private eventService: EventService,
    private router: Router
  ) {
    this.osCadastradaSubscription = this.eventService.osCadastrada$.subscribe(() => {
      this.getPedidosByIdAndRefresh();
      this.getPedidosPageAndRefresh()
         });
    this.osCanceladaSubscription = this.eventService.osCancelada$.subscribe(() => {
      this.getPedidosByIdAndRefresh();
      this.getPedidosPageAndRefresh()
         });
    this.osAceiteSubscription = this.eventService.osAceite$.subscribe(() => {
      this.getPedidosPageAndRefresh()
      this.getPedidosByIdAndRefresh();
         });
    this.osRecusadaSubscription = this.eventService.osRecusada$.subscribe(() => {
      this.getPedidosByIdAndRefresh();
      this.getPedidosPageAndRefresh()
        });
    this.osFinalizadaSubscription = this.eventService.osFinalizada$.subscribe(() => {
      this.getPedidosByIdAndRefresh();
      this.getPedidosPageAndRefresh()
        });
  }

  tipoUser!: string
  idPedido!: number
  pedido!: any
  pedidos!: any
  avaliacao: any
  estrelas: number | null  = null
  comentarios: string = ""
  imagem: any
  dataDaSolicitacao!: string
  dataDaFinalizacao!: string

  ngOnInit() {
    this.tipoUser = this.apiService.getUserRole()
    this.idPedido = this.apiService.readId()
    this.getPedidosByIdAndRefresh()
    this.getAvaliacaoByIdOSAndRefresh()

    
    }

 ngOnChanges(changes: SimpleChanges): void {
  this.getPedidosPageAndRefresh()
 }

  ngOnDestroy() {
    // Cancelar a inscrição no observável para evitar vazamentos de memória
    this.osCadastradaSubscription.unsubscribe();
    this.osCanceladaSubscription.unsubscribe();
    this.osAceiteSubscription.unsubscribe();
    this.osRecusadaSubscription.unsubscribe();
    this.osFinalizadaSubscription.unsubscribe();
  }
  
  //botão voltar
  onClickVoltar(){
    this.apiService.addCurrentPage(0) // reinicializa pagina atual para 0
    this.getPedidosPageAndRefresh() //atualiza página
    this.router.navigateByUrl('/historico-agendamentos');
  }
  //botão cancelarOS
  onClickCancelarOS() {
    this.cancelaOSAndRefresh()
  }
  //botão aceitarOS
  onClickAceitarOS() {
     this.aceitaOSAndRefresh()
  }
  //botão RecusarOS
  onClickRecusarOS() {
     this.recusaOSAndRefresh()
  }
  //botão avaliar
  onClickAvaliarOS(id: number) {
    this.apiService.addId(id)
  }

  private cancelaOSAndRefresh() {
    this.apiService.putCancelarOS().subscribe(
      (data) => {
        this.getPedidosByIdAndRefresh()
        this.getPedidosPageAndRefresh();
        this.dataDaSolicitacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaSolicitacao)
        this.dataDaFinalizacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaFinalizacao)

        //Emite sinal de cancelado
        this.eventService.emitOSCancelada();
      },
      (error) => {
        console.error('Erro CANCELAR OS', error);
      }
    );
  }
  private aceitaOSAndRefresh() {
    this.apiService.putAceiteOS().subscribe(
      (data) => {
        this.getPedidosByIdAndRefresh();
        this.getPedidosPageAndRefresh();
        this.dataDaSolicitacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaSolicitacao)
        this.dataDaFinalizacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaFinalizacao)
        //Emite sinal de aceito
        this.eventService.emitOSAceite();
      },
      (error) => {
        console.error('Erro ACEITE OS', error);
      }
    );
  }
  private recusaOSAndRefresh() {
    this.apiService.putRecusarOS().subscribe(
      (data) => {
      this.getPedidosByIdAndRefresh();
      this.getPedidosPageAndRefresh();
      //Emite sinal de cancelado
      this.eventService.emitOSRecusada();
      this.dataDaSolicitacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaSolicitacao)
      this.dataDaFinalizacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaFinalizacao)

      },
      
      (error) => {
        console.error('Erro ACEITE OS', error);
      }
    );
  }

  private getPedidosByIdAndRefresh() {
    this.apiService.getByIdPedido().subscribe(
      (data) => {
        this.pedido = data;
        this.dataDaSolicitacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaSolicitacao)
        this.dataDaFinalizacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaFinalizacao)
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
        this.dataDaSolicitacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaSolicitacao)
        this.dataDaFinalizacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaFinalizacao)
      },
      (error) => {
        console.error('Erro ao obter dados dos pedidos:', error);
      }
    );
  }
  private getAvaliacaoByIdOSAndRefresh() {
    this.apiService.getAvaliacoesByIdOS().subscribe(
      (data) => {
        this.avaliacao = data;
        this.estrelas = this.avaliacao.conteudo[0].estrelas;
        this.comentarios = this.avaliacao.conteudo[0].comentario;
        this.dataDaSolicitacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaSolicitacao)
        this.dataDaFinalizacao=this.apiService.converterDataAtualizacao(this.pedido.dataDaFinalizacao)
      }
   
    );
  }
}


