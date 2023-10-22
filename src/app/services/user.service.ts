
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
private email: string = '';
@Output() emitirEmail = new EventEmitter();
baseUrl = "http://localhost:8080/usuarios"

 
constructor(private http: HttpClient) { }
 
addEmail(valorEmail:string){
  this.email = valorEmail
  this.emitirEmail.emit(valorEmail)
}

readEmail () {
  return this.email
}

// create (product:Product): Observable<Product> {
//   return this.http.post<Product>(this.baseUrl, product)
// }

read(): Observable<Usuarios[]>{
  return this.http.get<Usuarios[]>(this.baseUrl)
}

}
