import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFeatureService } from '../../auth.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'app-login',
	templateUrl: './login.html',
	standalone: true,
	imports:[SharedModule]
})
export class LoginComponent {
	form: FormGroup;
	loading = false;
	error: string | null = null;

	constructor(private fb: FormBuilder, private auth: AuthFeatureService, private router: Router) {
		this.form = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	submit() {
		if (this.form.invalid) return;
		this.loading = true;
		this.error = null;
		const payload = this.form.value;
		this.auth.login(payload).subscribe({
			next: () => { this.loading = false; this.router.navigate(['/matches']); },
			error: (err) => { this.loading = false; this.error = err?.message || 'Login failed'; }
		});
	}
}
