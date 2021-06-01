import { Veiculo } from './../models/veiculo';
import { ServiceVeiculo } from '../service/service.veiculo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaVeiculo: any
  
  constructor(private serviceVeiculo: ServiceVeiculo, private router: Router) { }

  ngOnInit(): void {
    this.listar();  
  }

  listar(){
    this.serviceVeiculo.listar().subscribe(veiculos => {
      console.log(veiculos)
      this.listaVeiculo = veiculos
    })
  }
  excluir = (id: any) => {
    this.serviceVeiculo.excluir(id).subscribe(
      success => console.log("Deletado com sucesso"),
      error => console.log("Não foi possivel deletar. ERRO!"),
      () => console.log('Requisição completa')
    )   
    this.ngOnInit();
  }

  editar = (id: any) => {
    this.router.navigate(['cadastro', id])
  }
  

}
