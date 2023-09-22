import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwsApigatewayService {

  url: string = "https://nh12ytaqni.execute-api.us-east-2.amazonaws.com/transacciones-deploy"

  constructor(private httpClient: HttpClient) { }

  getPedidos(){
    return this.httpClient.get(this.url)
  }

  postPedido(nombrePedido:string, cantidadObjeto:string ,email:string){
    var body = {nombrePedido: nombrePedido, cantidadObjeto: cantidadObjeto ,email: email}
    return this.httpClient.post(this.url, body)
  }
}
