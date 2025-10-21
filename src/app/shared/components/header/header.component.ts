import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<header class="app-header"><ng-content></ng-content></header>`
})
export class HeaderComponent {}
