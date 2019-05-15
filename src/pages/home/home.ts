import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Usuario } from '../../modelo/usuario'; 
import {UsuarioProvider} from '../../providers/usuario/usuario';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    UsuarioProvider
  ]
 
})
export class HomePage {
  
  listaUsers: Usuario[]; 

  constructor(public navCtrl: NavController,   public events: Events, private usuarioProvider : UsuarioProvider) {
      this.initializeItems();
  }

  

  initializeItems() {

    this.usuarioProvider.getProdutos().subscribe(
      data => {
        this.listaUsers = data;
        console.log(data);
      }, error => {
        console.error(error); 
      })      
  }

  listarUsers(){
  this.navCtrl.push(ListPage, {
    lista: this.listaUsers
  })    
    
}


}
