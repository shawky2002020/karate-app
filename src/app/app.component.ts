import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthModule } from "./features/auth/auth.module";
import { HomePage } from "./home/home.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, AuthModule, HomePage],
  standalone:true
})
export class AppComponent {
  constructor() {}
}
