import { Component, OnInit } from '@angular/core';

interface Donaciones{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {
  componentes: Donaciones[] =[
    {
      icon:'',
      name:'Red de alimentos',
      redirecTo:'/red'
    },
    {
      icon:'',
      name:'Accion contra el Hambre',
      redirecTo:'/accion'
    },
    {
      icon:'',
      name:'Care.org',
      redirecTo:'/care'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
