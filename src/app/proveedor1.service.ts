import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { RespuestaToHeadLines } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(public http: HttpClient) { }

   getTopHeadLines(){
     return this.http.get<RespuestaToHeadLines>
     ('https://rickandmortyapi.com/api/character');
   }
}
