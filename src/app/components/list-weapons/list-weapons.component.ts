import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/models/weapon.model';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-list-weapons',
  templateUrl: './list-weapons.component.html',
  styleUrls: ['./list-weapons.component.sass'],
})
export class ListWeaponsComponent implements OnInit {
  weapons: Array<Weapon>;

  constructor(private weaponService: WeaponsService) {
    this.weapons = new Array<Weapon>();
  }

  ngOnInit(): void {
    this.weaponService.getWeapons().subscribe((response) => {
      this.weapons = response.data;
    });
  }
}
