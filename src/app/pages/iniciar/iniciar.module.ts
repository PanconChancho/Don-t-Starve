import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarPageRoutingModule } from './iniciar-routing.module';

import { IniciarPage } from './iniciar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    IniciarPageRoutingModule
  ],
  declarations: [IniciarPage]
})
export class IniciarPageModule {}
