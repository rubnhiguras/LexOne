import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { version, name } from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet style="margin:1.5rem"></ion-router-outlet>
      <footer class="app-footer">
        <i>&#169;</i> {{ currentYear }} {{ name }} {{ version }} 
      </footer>
    </ion-app>
  `,
  styles: [`
    .app-footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 4px;
      font-size: 11px;
      color: #888;
    }
  `]
})
export class AppComponent {
  version = version;
  currentYear = new Date().getFullYear();
  name = name
}