import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent.model';
import { ValorantApiService } from 'src/app/services/valorant-api.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.sass'],
})
export class ListAgentsComponent implements OnInit {
  agents: Array<Agent>;

  constructor(private valorantApiService: ValorantApiService) {
    this.agents = new Array<Agent>();
  }

  ngOnInit(): void {
    this.valorantApiService.getAgents().subscribe(
      (response) =>
        (this.agents = response.data.filter((agent) => {
          return agent.isPlayableCharacter ? agent : null;
        }))
    );
  }
}
