import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import {IonicModule} from '@ionic/angular'
import { AutoFocusDirective } from './directives/autofocus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    // Angular & Ionic modules for other modules using SharedModule
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    


  ],
})
  
export class SharedModule {}
