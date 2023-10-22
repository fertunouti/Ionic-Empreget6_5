
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { prestadorFilter } from 'src/app/services/prestadorFilter.model';

import { IonSearchbar } from '@ionic/angular';
import { ApiService } from 'src/app/services/apiService';


@Component({
  selector: 'app-busca-nome',
  templateUrl: './busca-nome.component.html',
  styleUrls: ['./busca-nome.component.scss'],
})

export class BuscaNomeComponent  implements OnInit {


constructor(apiService: ApiService) { }
//valorInicial: string = "Busque um Nome"  
prestadorByName!: prestadorFilter


@Output() mudouValor = new EventEmitter()

  termoProcurado:any
  onKeySearch(termo:IonSearchbar){
     this.termoProcurado = termo.value
     this.mudouValor.emit({novoTermo:this.termoProcurado})
  }


  ngOnInit() {}

}
