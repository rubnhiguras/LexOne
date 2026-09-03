import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>

      <footer class="app-footer">
        LexOne · v{{ version }}
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
}