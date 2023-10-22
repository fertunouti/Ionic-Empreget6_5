
// event.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private osCadastrada = new Subject<void>();
  private osCancelada = new Subject<void>();
  private osAceite = new Subject<void>();
  private osRecusada = new Subject<void>();
  private osFinalizada = new Subject<void>();
  private fotoAtualizada = new Subject<void>();
  private cadastroAtualizado = new Subject<void>();
  

  osCadastrada$ = this.osCadastrada.asObservable();
  osCancelada$ = this.osCancelada.asObservable();
  osAceite$=this.osAceite.asObservable();
  osRecusada$=this.osRecusada.asObservable();
  osFinalizada$=this.osFinalizada.asObservable();
  fotoAtualizada$=this.fotoAtualizada.asObservable();
 cadastroAtualizado$=this.cadastroAtualizado.asObservable();

  emitOSCadastrada() {
    this.osCadastrada.next();
  }
  emitOSCancelada() {
    this.osCancelada.next();
  }
  emitOSAceite() {
    this.osAceite.next();
  }
  emitOSRecusada() {
    this.osRecusada.next();
  }
  emitOSFinalizada() {
    this.osFinalizada.next();
  }
  emitFotoAtualizada() {
    this.fotoAtualizada.next();
  }
  emitCadastroAtualizado(){
    this.cadastroAtualizado.next();
  }
  
}

