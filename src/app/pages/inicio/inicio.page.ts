import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] =[
    {
      icon: 'heart-circle-outline',
      name: 'Donaciones',
      redirecTo: '/donaciones'
    },
    {
      icon: 'person',
      name: 'iniciar sesion',
      redirecTo: '/iniciar'
    },
    {
      icon: 'save',
      name: 'Registrarse',
      redirecTo: '/registrarse'
    },
    {
      icon: 'call',
      name: 'Contactanos',
      redirecTo: '/contactanos'
    },

   
  ]
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
