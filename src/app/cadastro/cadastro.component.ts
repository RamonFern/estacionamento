import { Veiculo } from './../models/veiculo';
import { ServiceVeiculo } from './../service/service.veiculo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  veiculo: Veiculo = new Veiculo('', '','','','','','',0)
  constructor(
    private service: ServiceVeiculo,
    private router: Router) { }

  ngOnInit(): void {
  }

  incluir = () => {
    this.service.incluir(this.veiculo).subscribe(
      success => console.log("Salvo com sucesso"),
      error => console.log("ERRO não foi possivel salvar!"),
      () => console.log("Requisição completa"))
      this.router.navigate(['home'])
  }
  

}
