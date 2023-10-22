import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent  implements OnInit {

  constructor() { }

  highlightedDates = [ //EXEMPLOS, FUTURA IMPLEMENTAÇÃO
    // {
    //   date: '2023-08-05',
    //   textColor: '#800080',
    //   backgroundColor: '#ffc0cb',
    // },
    // {
    //   date: '2023-08-10',
    //   textColor: '#09721b',
    //   backgroundColor: '#c8e5d0',
    // },
    // {
    //   date: '2023-09-20',
    //   textColor: 'var(--ion-color-secondary-contrast)',
    //   backgroundColor: 'var(--ion-color-secondary)',
    // },
    // {
    //   date: '2023-10-23',
    //   textColor: 'rgb(68, 10, 184)',
    //   backgroundColor: 'rgb(211, 200, 229)',
    // },
  ];

  ngOnInit() {}

  selectedDate!: any;

  @Output() dateSelected = new EventEmitter<any>();
  @Output() closeCalendar = new EventEmitter<void>();

  onClickOK(date:any){
    this.selectedDate = date
    console.log(this.selectedDate.value)

  }
  onClickCancel(){
  }
   // Método para definir a data escolhida
   onDateSelected(event: any) {
    const selectedDateTime = new Date(event.detail.value);
    const selectedDate = selectedDateTime.toISOString().split('T')[0]; // Captura a parte da data
    this.dateSelected.emit({ dataEscolhida : this.selectedDate })
  }

}




