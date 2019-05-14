import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  private apiPath = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(public httpClient: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

  getProdutos(){
    return this.httpClient.get<Usuario[]>(this.apiPath);
}

}
