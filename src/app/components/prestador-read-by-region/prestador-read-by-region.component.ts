import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';


@Component({
  selector: 'app-prestador-read-by-region',
  templateUrl: './prestador-read-by-region.component.html',
  styleUrls: ['./prestador-read-by-region.component.scss'],
})
export class PrestadorReadByRegionComponent implements OnInit {

  @Input() prestadoresByRegion!: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {  }

  onClick(prestadorId?: any) {
    this.apiService.addPrestadorId(prestadorId)
  }

}
