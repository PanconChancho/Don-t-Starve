import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  
  formularioRegistrarse: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController) { 

    this.formularioRegistrarse = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      'numero': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'ConfirmacionPassword': new FormControl("",Validators.required)
    });

  }

  ngOnInit() {
  }
  async guardar(){
    var f = this .formularioRegistrarse.value;

    if(this.formularioRegistrarse.invalid){
      const alert = await this.alertController.create({
        header:'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario))
  }
}
