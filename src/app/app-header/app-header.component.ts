import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  selectedPart: string = 'part1'; 

  onPartChange(): void {
    console.log('Selected Part:', this.selectedPart);
  }
}
