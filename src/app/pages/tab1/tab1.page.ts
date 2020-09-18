import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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


  async agregarLista(){
    //this.router.navigateByUrl('/tabs/tab1/agregar');
    
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

  }

}
