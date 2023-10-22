import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private apiService:ApiService,
    private router : Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/hello')
      
    },2000);
  }
 
}
