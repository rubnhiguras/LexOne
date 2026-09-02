import { Component } from '@angular/core';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { statsChartOutline, listOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-interno-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom" color="tertiary">
        <ion-tab-button tab="dashboard" href="/interno/dashboard">
          <ion-icon name="stats-chart-outline"></ion-icon>
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="queries" href="/interno/queries">
          <ion-icon name="list-outline"></ion-icon>
          <ion-label>Queries</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="perfil" href="/interno/dashboard">
          <ion-icon name="person-circle-outline"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `
})
export class InternoTabsPage {
  constructor() {
    addIcons({ statsChartOutline, listOutline, personCircleOutline });
  }
}
