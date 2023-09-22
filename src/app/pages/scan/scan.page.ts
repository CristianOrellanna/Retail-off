import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private dataLocal: DatalocalService) { }

  ngOnInit() {
  }

  scan(){
    
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.dataLocal.guardar(barcodeData.format,barcodeData.text);
      }
    }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardar('QRCode', 'geo: -33.45694, -70.64827');
    });
  }
}