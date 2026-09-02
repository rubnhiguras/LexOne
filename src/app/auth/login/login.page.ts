import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonButton, IonIcon, IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, briefcaseOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonText]
})
export class LoginPage {
  constructor(private router: Router) {
    addIcons({ personOutline, briefcaseOutline });
  }

  entrarComoCliente() {
    this.router.navigateByUrl('/cliente/master');
  }

  entrarComoInterno() {
    this.router.navigateByUrl('/interno/dashboard');
  }
}
