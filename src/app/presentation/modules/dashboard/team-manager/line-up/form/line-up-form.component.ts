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
  teamEventHelper: TeamEventHelper = new TeamEventHelper();
  constructor(private teamManagerService: TeamManagerService) { }

  ngOnInit(): void {
    this.getTeamPlayerList();
    this.getStaffList();
    this.getDetails();
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
        this.details = res.data;
      }
    });
  }
  next() {
    if (this.step < 5) {
      this.step += 1;
    }
  }

  onSave() {
    switch (this.step) {
      case 2:
        this.savePlayingXI();
        break;
    }
  }
  checkedBox(val: boolean){
    if(val){
      this.disbleButton = true;
    }
  }

  savePlayingXI(){

  }
}
