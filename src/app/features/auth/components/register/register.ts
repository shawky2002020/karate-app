import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl:'./register.scss',
  standalone: false,
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
    });
  }

  // Convenient getter to access form fields in HTML
  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // ✅ force show validation messages
      return;
    }

    this.loading = true;
    this.error = null;

    this.auth.register(this.form.value).subscribe({
      next: () => {
        console.log('User registered successfully');
        this.router.navigateByUrl('/auth/login');
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error.message || 'Registration failed. Try again.';
      },
    });
  }
}
