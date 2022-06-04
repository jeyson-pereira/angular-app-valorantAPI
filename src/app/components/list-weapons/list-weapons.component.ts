import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/models/weapon.model';
import { ValorantApiService } from 'src/app/services/valorant-api.service';

@Component({
  selector: 'app-list-weapons',
  templateUrl: './list-weapons.component.html',
  styleUrls: ['./list-weapons.component.sass'],
})
export class ListWeaponsComponent implements OnInit {
  weapons: Array<Weapon>;

  constructor(private valorantApiService: ValorantApiService) {
    this.weapons = new Array<Weapon>();
  }

  ngOnInit(): void {
    this.valorantApiService.getWeapons().subscribe((response) => {
      this.weapons = response.data;
    });
  }
}
