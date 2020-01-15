import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infopagina.interface';



@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

	info: InfoPagina = {};
	cargada = false;
  equipo:any[] = [];


  constructor(private http:HttpClient) {

  this.cargarinfo();
  this.cargarequipo();

   }


   private  cargarinfo(){

       this.http.get('assets/data/data-pagina.json')
       .subscribe( (resp:InfoPagina) => {
         this.cargada=true;
         this.info=resp;

       });
   }

   private  cargarequipo(){

       this.http.get('https://proyecto-e8ec7.firebaseio.com/equipo.json')
       .subscribe(resp => {
       
         this.equipo=resp;

       });
   }


}
