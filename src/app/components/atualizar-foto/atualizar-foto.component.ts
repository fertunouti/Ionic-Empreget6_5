import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-atualizar-foto',
  templateUrl: './atualizar-foto.component.html',
  styleUrls: ['./atualizar-foto.component.scss'],
})
export class AtualizarFotoComponent  implements OnInit {

  files! : Set<File>;
  foto: any;
  prestadorId!: number;
  prestadores: any;
  selectedFiles : any
  private fotoAtualizadaSubscription: Subscription;

  
  constructor(
    private apiService:ApiService,
    private eventService:EventService,
    private http: HttpClient,
    private alertController: AlertController
    ) {
      //monitora quando emite evento upload da foto na linha 50 
      this.fotoAtualizadaSubscription = this.eventService.fotoAtualizada$.subscribe(() => {
        this.readPrestador();
      });
     }

  ngOnInit() {
    this.prestadorId = this.apiService.readId()
    this.readPrestador();
   
  }


   ngOnDestroy() {
    // Cancelar a inscrição no observável para evitar vazamentos de memória
    this.fotoAtualizadaSubscription.unsubscribe();
  }
  onChange(event:any){
      this.selectedFiles = event.srcElement.files;
    
  }

  onUpload() {
    const formData = new FormData();
    formData.append('arquivo', this.selectedFiles[0], this.selectedFiles[0].name);
    this.apiService.putFotos(formData).subscribe(
      (response: any) => {
        this.eventService.emitFotoAtualizada();
        this.mostrarAlerta('Sua foto foi atualizada!');
      },
      (error) => {
        console.error("Erro ao cadastrar: ", error);
        this.mostrarAlerta('Erro!Verifique os dados e tente novamente!');
      
      }
    );
  }

//Deletar foto existente no Banco de Dados
onExcluirFoto() {

  this.apiService.delFotos().subscribe(
    (response: any) => {
      this.eventService.emitFotoAtualizada();
      this.mostrarAlerta('Sua foto foi excluída!');
    },
    (error) => {
      console.error("Erro ao cadastrar: ", error);
      this.mostrarAlerta('Erro! Verifique os dados e tente novamente.');
       }
  );
}



  async mostrarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header:'',
      message: mensagem,
      buttons: ['OK']
    });
  await alert.present();
  }

  readPrestador(): void {
    this.apiService.getDataPerfisPrestadores().subscribe(
      (data) => {
        this.prestadores = data;
      for (const prestador of this.prestadores.conteudo) {
          this.getImagemUrl(prestador.id);
        }
      },
      (error) => {
        console.error('Erro ao obter dados dos prestadores:', error);
      }
    );
  }
  getImagemUrl(id: number) {
    this.apiService.getFotoByIdListaPrestadores(id).subscribe(
      (data) => {
        this.foto = data;
        const imgUrl = `assets/images/${this.foto.nomeArquivo}`;
        const prestador = this.prestadores.conteudo.find((p: any) => p.id === id);
        if (prestador) {
          prestador.imgUrl = imgUrl;
        }
      },
      (error) => {
        console.error('Erro ao obter dados da foto', error);
      }
    );
  }



  
}
