import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: false,
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async submit() {
    if (this.form.invalid) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    this.loading = true;
    this.error = '';

    const { username, password } = this.form.value;

    // Simulate an API request (replace this with your real authentication service)
    try {
      const loader = await this.loadingCtrl.create({ message: 'Signing in...' });
      await loader.present();

      // Fake delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (username === 'admin' && password === '123456') {
        await loader.dismiss();

        const toast = await this.toastCtrl.create({
          message: 'Login successful!',
          duration: 1500,
          color: 'success',
        });
        await toast.present();

        this.router.navigateByUrl('/home', { replaceUrl: true });
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (err: any) {
      this.error = err.message || 'Login failed. Please try again.';
      const toast = await this.toastCtrl.create({
        message: this.error,
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    } finally {
      this.loading = false;
    }
  }
}
