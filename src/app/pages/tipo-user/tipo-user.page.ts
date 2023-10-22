import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-tipo-user',
  templateUrl: './tipo-user.page.html',
  styleUrls: ['./tipo-user.page.scss'],
})
export class TipoUserPage implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  onClickCliente(){
    this.apiService.setUserRole("CLIENTE");
  }
  onClickPrestador(){
    this.apiService.setUserRole("PRESTADOR");
  }

}
