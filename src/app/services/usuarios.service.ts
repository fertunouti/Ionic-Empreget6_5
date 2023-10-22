
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuarios } from './usuarios.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosURL = "http://localhost:8080/usuarios"


  constructor(private http: HttpClient) {}

   
   consultaUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.usuariosURL)

  }



  
 
}
