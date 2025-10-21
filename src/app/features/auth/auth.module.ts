import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
