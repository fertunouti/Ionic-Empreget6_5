import { Component, OnInit, Output, EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-busca-region',
  templateUrl: './busca-region.component.html',
  styleUrls: ['./busca-region.component.scss'],
})
export class BuscaRegionComponent implements OnInit,OnChanges {
  @Output() mudouRegiao = new EventEmitter()

  termoProcurado: any
  onEscolheRegiao(termo: any) {
    this.termoProcurado = termo.detail.value
    this.mudouRegiao.emit({ novaRegiao: this.termoProcurado })
  }

   logs: string[] = [];

   pushLog(msg:string) {
     this.logs.unshift(msg);
   }
  constructor() { }

  ngOnInit() { }
  ngOnChanges() { }

}