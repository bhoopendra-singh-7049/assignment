import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-features',
  imports: [CommonModule],
  templateUrl: './service-features.component.html',
  styleUrl: './service-features.component.css',
})
export class ServiceFeaturesComponent {
  serviceFeatures = [
    {
      icon: 'bi bi-truck',
      title: 'Free Shipping',
      description: 'For invoices over $1.500'
    },
    {
      icon: 'bi bi-cash-stack',
      title: 'Cash Back',
      description: 'When paying for products via Dasun Wallet'
    },
    {
      icon: 'bi bi-headset',
      title: '24/7 Support',
      description: 'When something goes wrong'
    }
  ];

}
