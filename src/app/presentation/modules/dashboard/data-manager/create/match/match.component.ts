import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatchEvent } from 'src/app/core/models/matchEvent.model';
import { StadiumManagementService } from 'src/app/core/services/stadium-management.service';
import { StateManagementService } from 'src/app/core/services/state-management.service';
import { TeamManagementService } from 'src/app/core/services/team-management.service';

@Component({
  selector: 'app-data-manager-create-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchComponent implements OnInit {
  matchEvent: MatchEvent = new MatchEvent();
  teamList: any = [];
  stadiumList: any = [];

  constructor(
    private dataManagerService: StateManagementService,
    private _teamManagementService: TeamManagementService,
    private _stadiumManagementService: StadiumManagementService
  ) {}

  ngOnInit(): void {}

  onCreate() {
    let model: any = {};
    model['away_team'] = this.matchEvent.away_team;
    (model['city'] = this.matchEvent.city),
      (model['date'] = this.matchEvent.date),
      (model['home_team'] = this.matchEvent.home_team),
      (model['round'] = this.matchEvent.round),
      (model['stadium'] = this.matchEvent.stadium),
      (model['tournament'] = this.matchEvent.tournament),
      (model['venue'] = this.matchEvent.venue);
    this.dataManagerService.createMatchEvent(model).subscribe((res: any) => {
      alert(res.message);
    });
  }

  getTeamList() {
    this._teamManagementService.getTeamList().subscribe((response: any) => {
      if (response) {
        this.teamList = response.teams;
      }
    });
  }

  getStadiumList() {
    this._stadiumManagementService
      .getStadiumList()
      .subscribe((response: any) => {
        if (response) {
          this.stadiumList = response.stadia;
        }
      });
  }
}
