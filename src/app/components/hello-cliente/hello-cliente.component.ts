import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';
import { prestadorFilter } from 'src/app/services/prestadorFilter.model';




@Component({
  selector: 'app-hello-cliente',
  templateUrl: './hello-cliente.component.html',
  styleUrls: ['./hello-cliente.component.scss'],
})

export class HelloClienteComponent  implements OnInit {
  
  private cadastroAtualizadoSubscription: Subscription;
  constructor(
    private apiService: ApiService,
    private eventService : EventService) {
    this.cadastroAtualizadoSubscription = this.eventService.cadastroAtualizado$.subscribe(() => {
      this.readCliente()
    });
   }

  emailUserAtual: string = '';
  nomePrestadorProcurado!: any
  clientes: any
  tipoUser!: string
 
 
  ngOnInit(): void {
    this.tipoUser = this.apiService.getUserRole()
    this.readCliente()
  }
  ngOnDestroy() {
    // Cancelar a inscrição no observável para evitar vazamentos de memória
    this.cadastroAtualizadoSubscription.unsubscribe();
  }

  readCliente(){
    this.apiService.getDataPerfisClientes().subscribe(
      (data) => {
      this.clientes = data;
       },
    (error) => {
       console.error('Erro ao obter dados:', error);
     })    
   }

   onClickAtualizarCliente() {
    this.apiService.addClienteId(this.clientes[0].id)
  }

}
