import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  constructor(private authService:AuthService, private apiService:ApiService) { 
}

 isLoggedIn!: boolean;
 tipoUser: string =""
 prestadores: any

 ngOnInit() {
  this.isLoggedIn = this.apiService.readLoginStatus()
  this.tipoUser = this.apiService.getUserRole()
  }

 onLogin(event: any): void {
      this.isLoggedIn = true;
      this.tipoUser = this.apiService.getUserRole()
    }

 onLogout(event:any):void{
   this.isLoggedIn = false
 }

}
