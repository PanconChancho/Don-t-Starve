import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes : Componente[] =[
    {
      icon: 'heart-circle-outline',
      name: 'Donaciones',
      redirecTo: '/donaciones'
    },
    {
      icon: 'person',
      name: 'iniciar sesion',
      redirecTo: '/login'
    },
    {
      icon: 'save',
      name: 'Registrarse',
      redirecTo: '/register'
    },

    {
      icon: 'person',
      name: 'Donadores',
      redirecTo: '/donadores'
    },
    {
      icon: 'person',
      name: 'Datos',
      redirecTo: '/datos'
    },

   
  ]
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
