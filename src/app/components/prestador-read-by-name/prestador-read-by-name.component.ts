import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-prestador-read-by-name',
  templateUrl: './prestador-read-by-name.component.html',
  styleUrls: ['./prestador-read-by-name.component.scss'],
})
export class PrestadorReadByNameComponent implements OnInit {

  @Input() prestadoresByName!: any
 
  constructor(private apiService: ApiService) { }

  ngOnInit() {  }

  onClick(prestadorId?: any) {
    this.apiService.addPrestadorId(prestadorId)
  }

}