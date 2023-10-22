import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-gerenciar-foto',
  templateUrl: './gerenciar-foto.page.html',
  styleUrls: ['./gerenciar-foto.page.scss'],
})
export class GerenciarFotoPage implements OnInit {
  tipoUser!: string
  foto: any;
  urlFotoPerfil!: string
  prestadores: any
  selectedFiles: any

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController,
    private eventService: EventService,
    private alertController: AlertController

  ) {
  
  }

  ngOnInit() {
    this.tipoUser = this.apiService.getUserRole()
    
  }


  
  ngOnChanges(changes: SimpleChanges): void {
    
    //this.readPrestador();
   }
  onChange(event:any){
   console.log (event)
   this.selectedFiles = event.srcElement.files;
   console.log(this.selectedFiles)
   
  }
  onClickVoltar() {
    this.navCtrl.navigateBack('/hello');
  }

 
}
