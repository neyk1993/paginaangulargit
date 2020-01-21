import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {


	cargando = true;
  productos:Producto[]=[];
  productosFiltrado:Producto[]=[];


  constructor(private http:HttpClient) { 


  	this.cargarproductos();

  }

  private cargarproductos () {

    return new Promise((resolve,reject)=>{
        this.http.get('https://proyecto-e8ec7.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
         this.cargando= false;
         this.productos=resp;
         resolve();

         });
    });

  	
  }

  getProducto(id:string){

    return this.http.get(`https://proyecto-e8ec7.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto(termino:string){

      if(this.productos.length === 0) {

        this.cargarproductos().then(()=>{

        this.filtrarProductos(termino);

        });

      } else {

        this.filtrarProductos(termino);
      }


  }

  private filtrarProductos(termino : string) {

      termino = termino.toLocaleLowerCase();
      this.productosFiltrado = [];
      this.productos.forEach(prod=>{
          const titulolwer = prod.titulo.toLocaleLowerCase();

          if(prod.categoria.indexOf(termino)>=0 || titulolwer.indexOf(termino)>=0) {
              this.productosFiltrado.push(prod);
          }
      });

  }
}
