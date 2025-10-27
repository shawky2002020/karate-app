import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Initialize Ionicons web components (required for <ion-icon>)
import { defineCustomElements } from 'ionicons/dist/loader';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  stopwatchOutline,
  trophyOutline,
  analyticsOutline,
  listOutline
} from 'ionicons/icons';

addIcons({
  'home-outline': homeOutline,
  'stopwatch-outline': stopwatchOutline,
  'trophy-outline': trophyOutline,
  'analytics-outline': analyticsOutline,
  'list-outline': listOutline
});

defineCustomElements(window as any);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
  ],
});
