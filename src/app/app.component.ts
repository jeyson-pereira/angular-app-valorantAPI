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
  showMaps: boolean;

  constructor() {
    this.showWeapons = false;
    this.showAgents = false;
    this.showMaps = true;
  }


  handleShowContent(content :string) {
    switch (content) {
      case 'Weapons':
        this.showWeapons = !this.showWeapons;
        break;
      case 'Agents':
        this.showAgents = !this.showAgents;
        break;
      case 'Maps':
        this.showMaps = !this.showMaps;
        break;
      default:
        break;
    }
  }
}
