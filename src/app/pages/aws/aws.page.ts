import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.page.html',
  styleUrls: ['./aws.page.scss']
})
export class AwsPage implements OnInit {

  nombrePedido: string = ""
  cantidadObjeto: string= ""
  email: string = ""

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {
    this.service.getPedidos().forEach((d:any) =>{
      console.log(d.body)
    })
  }

  postPedido(){
    this.service.postPedido(this.nombrePedido, this.cantidadObjeto ,this.email).subscribe((data) =>{
      console.log(data)
    })
  }
}
