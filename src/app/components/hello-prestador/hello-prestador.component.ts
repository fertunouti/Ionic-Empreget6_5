import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-hello-prestador',
  templateUrl: './hello-prestador.component.html',
  styleUrls: ['./hello-prestador.component.scss'],
})
export class HelloPrestadorComponent implements OnInit {
  private cadastroAtualizadoSubscription: Subscription;
  constructor(
    private apiService: ApiService,
    private eventService: EventService    
    ) {
      this.cadastroAtualizadoSubscription = this.eventService.cadastroAtualizado$.subscribe(() => {
        this.readPrestador()
      });
     }
  prestadores: any
  tipoUser!: string

  ngOnInit() {
    this.tipoUser = this.apiService.getUserRole()
    this.readPrestador()
  }

  ngOnDestroy() {
    // Cancelar a inscrição no observável para evitar vazamentos de memória
    this.cadastroAtualizadoSubscription.unsubscribe();
  }
  
  readPrestador(): void {
    this.apiService.getDataPerfisPrestadores().subscribe(
      (data) => {
        this.prestadores = data;
      },
      (error) => {
        console.error('Erro ao obter dados dos prestadores:', error);
      }
    );
  }

  onClickAtualizarFoto() {
    this.apiService.addPrestadorId(this.prestadores.conteudo[0].id)
  }

  onClickAtualizarPrestador() {
    this.apiService.addPrestadorId(this.prestadores.conteudo[0].id)
  }

}
