import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonicModule,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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
    private loadingCtrl: LoadingController,
    private auth: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // ✅ force show validation messages
      return;
    }

    this.loading = true;
    const loader = await this.loadingCtrl.create({ message: 'Signing in...' });
    await loader.present();

    this.auth.login(this.form.value).subscribe({
      next: async () => {
        // Dismiss loader, show success toast, then navigate (replaceUrl)
        try { await loader.dismiss(); } catch (e) { /* ignore if already dismissed */ }
        const toast = await this.toastCtrl.create({
          message: 'Login successful',
          duration: 1500,
          color: 'success',
        });
        await toast.present();

        this.loading = false;
        void this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
      },
      error: async (err) => {
        try { await loader.dismiss(); } catch (e) { /* ignore */ }
        this.loading = false;
        console.log(err.message);
        
        this.error = err?.message || 'Login failed. Try again.';
        const toast = await this.toastCtrl.create({
          message: this.error,
          duration: 2500,
          color: 'danger',
        });
        await toast.present();
      },
    });
  }
}
