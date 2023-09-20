import { Component, OnInit } from '@angular/core';

import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(protected service: DatalocalService) { }

  ngOnInit() {
  }

  abrir(registro:any){
    this.service.abrir(registro)
  }
}
