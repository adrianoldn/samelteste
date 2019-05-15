import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  BarcodeScannerOptions, BarcodeScanner} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  options: BarcodeScannerOptions; 
  scannedData : any = {}; 

  constructor(public scanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scan(){
    this.options =  {
      prompt : 'Leia o QRCode'
    }
    this.scanner.scan(this.options).then((data)=> {
      this.scannedData = data; 
    }, (erro) => {
      console.log('Error:', erro )
    } )
  }

}
