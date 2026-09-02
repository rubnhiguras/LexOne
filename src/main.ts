import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideServiceWorker } from '@angular/service-worker';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

function isLocalhost(): boolean {
  return !location.hostname || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({}),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isLocalhost(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
});
