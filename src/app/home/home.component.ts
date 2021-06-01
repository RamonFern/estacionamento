import { Veiculo } from './../models/veiculo';
import { ServiceVeiculo } from '../service/service.veiculo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaVeiculo: any
  constructor(private serviceVeiculo: ServiceVeiculo) { }

  ngOnInit(): void {
    this.listar();  
  }

  listar(){
    console.log("dentro do listar!")
    this.serviceVeiculo.listar().subscribe(veiculos => {
      console.log(veiculos)
      this.listaVeiculo = veiculos
    })
  }

}
