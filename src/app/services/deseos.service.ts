import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();
    /*
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Héroes a desaparecer');

    this.listas.push(lista1, lista2);*/
    
   }

   crearLista( titulo:string ){

    const nuevaLista = new Lista(titulo);
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
   }

   obtenerLista(){
     
   }

   guardarStorage(){
    
    localStorage.setItem('data', JSON.stringify(this.listas) );

   }

   cargarStorage(){

    if( localStorage.getItem('data') ){
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = [];
    }

  }


}
