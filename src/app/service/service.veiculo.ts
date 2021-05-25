import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceVeiculo {

  constructor() { }

  listar(){
    return ['Compurador', 'Computador', 'Fones', 'Mouse']
  }
}
