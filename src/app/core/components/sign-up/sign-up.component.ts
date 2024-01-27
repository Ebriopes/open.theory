import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  tries = 0;
  signUpForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      lastName: [''],
      secondName: [''],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  signUp(): void {
    this.tries++;

    if (this.signUpForm.valid) {
      const jsonUserInfo = JSON.stringify(this.signUpForm.value);
      localStorage.setItem('user', jsonUserInfo);

      this.router.navigate(['/home']);
    }
  }
}
