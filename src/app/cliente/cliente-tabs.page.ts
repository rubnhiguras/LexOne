import { Component } from '@angular/core';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, chatbubblesOutline, helpCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cliente-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom" color="primary">
        <ion-tab-button tab="master" href="/cliente/master">
          <ion-icon name="home-outline"></ion-icon>
          <ion-label>Master</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="chat-query" href="/cliente/chat-query">
          <ion-icon name="chatbubbles-outline"></ion-icon>
          <ion-label>Query</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="faq" href="/cliente/faq">
          <ion-icon name="help-circle-outline"></ion-icon>
          <ion-label>FAQ</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `
})
export class ClienteTabsPage {
  constructor() {
    addIcons({ homeOutline, chatbubblesOutline, helpCircleOutline });
  }
}
