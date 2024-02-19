import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-buy-coins-button',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './buy-coins-button.component.html',
  styleUrl: './buy-coins-button.component.scss',
})
export class BuyCoinsButtonComponent {
  buyCoins() {
    alert('buy coins button');
  }
}
