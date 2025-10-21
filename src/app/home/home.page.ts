import { Component } from '@angular/core';
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports:[SharedModule]

})
export class HomePage {
  constructor() {}
  alertButtons = ['Ok', 'No'];
  
}
