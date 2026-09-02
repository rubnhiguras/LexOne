import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline } from 'ionicons/icons';

@Component({
  selector: 'app-master',
  standalone: true,
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonIcon
  ]
})
export class MasterPage {
  constructor(private router: Router) {
    addIcons({ chatbubbleEllipsesOutline });
  }

  nuevaQuery() {
    this.router.navigateByUrl('/cliente/chat-query');
  }
}
