import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { Proveedor1Service } from '../../proveedor1.service';

@Component({
  selector: 'app-donadores',
  templateUrl: './donadores.page.html',
  styleUrls: ['./donadores.page.scss'],
})
export class DonadoresPage implements OnInit {
  usuarios: Article[]=[]

  constructor(public proveedor1Service:Proveedor1Service) { }

  ngOnInit() {
    this.proveedor1Service.getTopHeadLines().subscribe(resp=>{
      console.log('usuarios',resp);
      this.usuarios.push(...resp.results);
    });
  }

}
