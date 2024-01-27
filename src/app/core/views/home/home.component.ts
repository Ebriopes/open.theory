import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

interface userInfo {
  name: string;
  lastName: string;
  secondName: string;
  password?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  user: userInfo = { name: '', lastName: '', secondName: '' };

  constructor(private readonly router: Router) {
    const userPlainInfo = localStorage.getItem('user');

    if (userPlainInfo) {
      this.user = JSON.parse(userPlainInfo) as userInfo;
    }
  }

  clearUser(): void {
    localStorage.removeItem('user');
    this.user = { name: '', lastName: '', secondName: '' };
    this.router.navigate(['/login']);
  }
}
