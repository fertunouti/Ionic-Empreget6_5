import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-agendamentos-prestador',
  templateUrl: './agendamentos-prestador.page.html',
  styleUrls: ['./agendamentos-prestador.page.scss'],
})
export class AgendamentosPrestadorPage implements OnInit {

  constructor(private apiService: ApiService) { }
  tipoUserAtual!: string
  ngOnInit() {

    this.tipoUserAtual = this.apiService.getUserRole()
  }

}
