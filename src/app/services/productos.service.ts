import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {


	cargando = true;
  productos:Producto[]=[];


  constructor(private http:HttpClient) { 


  	this.cargarproductos();

  }

  private cargarproductos () {

  	this.http.get('https://proyecto-e8ec7.firebaseio.com/productos_idx.json')
  	.subscribe((resp: Producto[]) => {
       this.cargando= false;
       this.productos=resp
        console.log(resp);

       });
  }
}
