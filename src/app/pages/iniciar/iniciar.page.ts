import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  formularioIniciar: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 

    this.formularioIniciar = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {

}
async presentAlert(){
    const alert = await this.alertController.create({
      header: 'ALERTA',
      subHeader: 'Datos Incorrectos',
      message: 'Ingrese datos validos',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

}
