import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private scanner: BarcodeScanner, private service: DatalocalService) { }

  ngOnInit() {
  }

  scan(){
    this.scanner.scan().then(data =>{
      if(!data.cancelled)
        this.service.guardar(data.format, data.text)
    })
    .catch(err => {
      this.service.guardar('QRCode', 'geo: -53.5, 40')
    })
  }

}
