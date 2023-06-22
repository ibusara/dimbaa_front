import { Component, OnInit } from '@angular/core';
import { TeamEventHelper } from './team-event-helper';
import { TeamManagerService } from 'src/app/core/services/team-manager.service';

@Component({
  templateUrl: './line-up-form.component.html',
  styleUrls: ['./line-up-form.component.scss']
})
export class LineUpFormComponent implements OnInit {
  submitTab = false;
  step = 1
  disbleButton = false;
  playersList: any = [];
  staffList: any = [];
  details: any;
  playFormation: any = [];
  teams: any = [];
  teamEventHelper: TeamEventHelper = new TeamEventHelper();
  constructor(private teamManagerService: TeamManagerService) { }

  ngOnInit(): void {
    this.getTeamPlayerList();
    this.getStaffList();
    this.getDetails();
    this.getPlayFormation();
    this.getTeams();
  }
  getTeamPlayerList() {
    this.teamManagerService.getTeamPlayerList().subscribe((res: any) => {
      if (res) {
        this.playersList = res?.players;
      }
    });
  }
  getStaffList() {
    this.teamManagerService.getStaffList().subscribe((res: any) => {
      if (res) {
        this.staffList = res?.Content;
      }
    });
  }

  getDetails() {
    this.teamManagerService.getDetails().subscribe((res: any) => {
      if (res) {
        this.details = res?.data;
      }
    });
  }
  getPlayFormation() {
    this.teamManagerService.getPlayFormation().subscribe((res: any) => {
      if (res) {
        this.playFormation = res?.Content;
      }
    });
  }

  getTeams() {
    this.teamManagerService.getTeams().subscribe((res: any) => {
      if (res) {
        this.teams = res?.Content;
      }
    });
  }
  next() {
    if (this.step < 6) {
      this.step += 1;
    }
  }

  onSave() {
    switch (this.step) {
      case 6:
        this.savePlayingXI();
        break;
    }
  }
  checkedBox(val: boolean){
    if (this.step == 6) {
      this.disbleButton = val;
    }
  }

  savePlayingXI(){

  }
}
