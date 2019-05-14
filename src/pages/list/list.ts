import { Component } from '@angular/core';
import { Usuario} from '../../modelo/usuario';
import { LoadingController, NavController} from 'ionic-angular';
import {UsuarioProvider} from '../../providers/usuario/usuario';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [
    UsuarioProvider
  ]
})
export class ListPage {
  public listaUsuarios: Usuario[];
  public dados : Usuario[]; 
  searchQuery: string = '';

  constructor( private usuarioProvider : UsuarioProvider, public loadingCtrl: LoadingController, private navCrtl: NavController) {
    this.initializeItems();
  }

  buscaItens(){
    this.dados = this.listaUsuarios;
  }

  

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    return loader;
  }



  initializeItems() {
    const load = this.presentLoading();
    load.present();
    this.usuarioProvider.getProdutos().subscribe(
      data => {
        this.listaUsuarios = data;
        console.log(data);
        load.dismiss();
      }, error => {
        console.error(error); 
      })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.buscaItens();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      return this.listaUsuarios = this.listaUsuarios.filter(usuario => 
         usuario.title.toLowerCase().includes(val.toLowerCase())); 
      }else{
        this.initializeItems();
      }
    
    }

 
}
