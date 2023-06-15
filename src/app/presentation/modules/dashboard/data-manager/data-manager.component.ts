import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { StadiumManagementService } from 'src/app/core/services/stadium-management.service';
import { StateManagementService } from 'src/app/core/services/state-management.service';
import { TeamManagementService } from 'src/app/core/services/team-management.service';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss'],
})
export class DataManagerComponent implements OnInit {
  teamList: any = [];
  stadiumList: any = [];
  tournamentList: any = [];

  currentRoute: string = 'Upcoming';
  tabs: any[] = [
    {
      name: 'Upcoming',
      route: '/dashboard/r/data-manager/upcoming',
    },
    {
      name: 'Current',
      route: '/dashboard/r/data-manager/current',
    },
    {
      name: 'History',
      route: '/dashboard/r/data-manager/history',
    },
  ];

  constructor(
    private router: Router,
    private _stateManagementService: StateManagementService,
    private _teamManagementService: TeamManagementService,
    private _stadiumManagementService: StadiumManagementService
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/dashboard/r/data-manager/upcoming') {
          this.currentRoute = 'Upcoming';
        } else if (event.url == '/dashboard/r/data-manager/history') {
          this.currentRoute = 'History';
        } else if (event.url == '/dashboard/r/data-manager/current') {
          this.currentRoute = 'Current';
        }
      });
  }
  ngOnInit(): void {
    this.getTournamentList();
    this.getStadiumList();
    this.getTeamList();
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

  getTournamentList() {
    this._teamManagementService
      .getTournamentList()
      .subscribe((response: any) => {
        if (response) {
          this.tournamentList = response.tournament;
        }
      });
  }
}
