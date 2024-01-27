import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SignInComponent } from '@components/sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, SignInComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
