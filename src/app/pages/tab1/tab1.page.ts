import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController ) {
    
  }

  //Promesa
  async agregarLista(){
  //this.router.navigateByUrl('/tabs/tab1/agregar');
    
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log("Cancelar");
          }
        },
        {
          text: 'Crear',
          handler: ( data ) =>{
            console.log(data);

            if( data.titulo.length === 0){
              return;
            }

            const listaId = this.deseosService.crearLista( data.titulo );

            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
    
            //Crear la lista
          }
        }
      ]
    });

    await alert.present();

  }

  listaSeleccionada( lista: Lista ){

    this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);

  }

}
