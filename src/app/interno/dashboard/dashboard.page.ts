import { Component } from '@angular/core';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCol, IonCard, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCol, IonCard, IonCardContent
  ]
})
export class DashboardPage {
  queriesPendientes = 3;
  queriesRespondidas = 12;
}
