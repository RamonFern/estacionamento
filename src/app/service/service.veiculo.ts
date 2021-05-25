import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceVeiculo {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:8080/estacionamento')
  }
}
