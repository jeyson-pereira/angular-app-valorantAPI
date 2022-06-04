import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ValorantAPI';
  showWeapons: boolean;
  showAgents: boolean;

  constructor() {
    this.showWeapons = true;
    this.showAgents = true;
  }


  handleShowContent(content :string) {
    switch (content) {
      case 'Weapons':
        this.showWeapons = !this.showWeapons;
        break;
      case 'Agents':
        this.showAgents = !this.showAgents;
        break;
      default:
        break;
    }
  }
}
