import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.service';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {


	cargando = true;
  constructor(private http:HttpClient) { 


  	this.cargarproductos();

  }

  private cargarproductos () {

  	this.http.get('https://proyecto-e8ec7.firebaseio.com/productos_idx.json')
  	.subscribe((resp : Productos[]) => {
       this.cargando= false;
        console.log(resp);

       });
  }
}
