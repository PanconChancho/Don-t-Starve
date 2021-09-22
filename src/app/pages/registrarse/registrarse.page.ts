import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  
  formularioRegistrarse: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formularioRegistrarse = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

}
