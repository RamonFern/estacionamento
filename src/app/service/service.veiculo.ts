import { Veiculo } from './../models/veiculo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceVeiculo {

  private readonly API = `${environment.API}estacionamento`
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Veiculo[]>(`${this.API}`)
  }

  excluir(id: any){
    return this.http.delete(`${this.API}/${id}`)
  }

  incluir(veiculo: Veiculo){
    return this.http.post(this.API, veiculo)
  }
  
  editar(veiculo: Veiculo){
    return this.http.put(`${this.API}/${veiculo.id}`, veiculo)
  }

  buscarItemId(id: any){
    return this.http.get<Veiculo>(`${this.API}/${id}`)
  }
}
