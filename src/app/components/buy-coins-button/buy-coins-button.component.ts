import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-coins-button',
  standalone: true,
  imports: [],
  templateUrl: './buy-coins-button.component.html',
  styleUrl: './buy-coins-button.component.scss',
})
export class BuyCoinsButtonComponent {
  buyCoins() {
    alert('buy coins button');
  }
}
