import { Component } from '@angular/core';
import { Usuario} from '../../modelo/usuario';
import { LoadingController, Events, NavParams} from 'ionic-angular';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public listaUsuarios: Usuario[];
  public dados : Usuario[]; 
  searchQuery: string = '';

  constructor(  public loadingCtrl: LoadingController, public events: Events, private navParams : NavParams){
  
   this.buscaItens();

  }

  buscaItens(){
  this.listaUsuarios = this.navParams.get("lista");
  }
  

  getItems(ev: any) {
  
    this.buscaItens();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listaUsuarios = this.listaUsuarios.filter(usuario => {
          return  (usuario.title.toLowerCase().indexOf(val.toLowerCase())> -1); 
      }

      )}
    }
}



