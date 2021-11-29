import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

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
      icon: 'call',
      name: 'Contactanos',
      redirecTo: '/contactanos'
    },


   
  ]

}
