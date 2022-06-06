import { Component, OnInit } from '@angular/core';
import { Map } from 'src/app/models/map.model';
import { ValorantApiService } from 'src/app/services/valorant-api.service';

@Component({
  selector: 'app-list-maps',
  templateUrl: './list-maps.component.html',
  styleUrls: ['./list-maps.component.sass']
})
export class ListMapsComponent implements OnInit {
  maps: Array<Map>;

  constructor(private valorantApiService: ValorantApiService) {
    this.maps = new Array<Map>();
  }

  ngOnInit(): void {
    this.valorantApiService.getMaps()
    .subscribe((response) => {
      this.maps = response.data;
    });
  }

}
