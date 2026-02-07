import { Component } from '@angular/core';
import { HERO_BOTTOM, HERO_CENTER, HERO_LEFT, HERO_RIGHT } from '../../data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  left = HERO_LEFT;
  center = HERO_CENTER;
  right = HERO_RIGHT;
  bottom = HERO_BOTTOM;
}
