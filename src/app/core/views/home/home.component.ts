import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface userInfo {
  name: string;
  lastName: string;
  secondName: string;
  password?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  user: userInfo = { name: '', lastName: '', secondName: '' };

  constructor() {
    const userPlainInfo = localStorage.getItem('user');

    if (userPlainInfo) {
      this.user = JSON.parse(userPlainInfo) as userInfo;
    }
  }
}
