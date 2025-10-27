import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {IonicModule} from '@ionic/angular'
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    CoreModule,
    SharedModule,
    AppComponent
  ]

})
export class AppModule {}
