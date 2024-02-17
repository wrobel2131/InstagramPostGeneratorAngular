import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UserInfoPageComponent } from '../user-info-page/user-info-page.component';
import { BillingInfoPageComponent } from '../billing-info-page/billing-info-page.component';

@Component({
  selector: 'app-manage-user-data',
  standalone: true,
  imports: [MatTabsModule, UserInfoPageComponent, BillingInfoPageComponent],
  templateUrl: './manage-user-data.component.html',
  styleUrl: './manage-user-data.component.scss',
})
export class ManageUserDataComponent {}
