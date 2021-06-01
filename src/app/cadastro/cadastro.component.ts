import { Veiculo } from './../models/veiculo';
import { ServiceVeiculo } from './../service/service.veiculo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  veiculo: Veiculo = new Veiculo('','','','','','','',0)
  textoBotao: string = 'Adicionar'
  constructor(
    private service: ServiceVeiculo,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRouter.params.subscribe(parametros => {
      if(parametros['id']){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.service.buscarItemId(this.id).subscribe(veic => {
          this.veiculo = veic
        })
        console.log(`Id enviado: ${this.id}`)
      }
    }
    )
  }
  
  incluir = () => {
    if(this.textoBotao == 'Adicionar'){
      this.service.incluir(this.veiculo).subscribe(
        success => this.navegar('home'),
        error => console.log("ERRO não foi possivel salvar!"),
        () => console.log("Requisição completa"))
    }else {
      this.editar()
    }
  }

  editar = () => {
    this.service.editar(this.veiculo).subscribe(
      success => this.navegar('home'),
      error => console.log("Não foi possivel editar. ERRO!"),
      () => console.log('Requisição completa'))
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }

}