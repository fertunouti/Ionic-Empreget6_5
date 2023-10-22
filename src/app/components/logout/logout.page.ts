
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  @Output() mudouLogout = new EventEmitter()
  constructor(private router : Router, private authService:AuthService) { }

   ngOnInit() {
   
    this.authService.logout()
  }

}
