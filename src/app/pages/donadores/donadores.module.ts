import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonadoresPageRoutingModule } from './donadores-routing.module';

import { DonadoresPage } from './donadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonadoresPageRoutingModule
  ],
  declarations: [DonadoresPage]
})
export class DonadoresPageModule {}
