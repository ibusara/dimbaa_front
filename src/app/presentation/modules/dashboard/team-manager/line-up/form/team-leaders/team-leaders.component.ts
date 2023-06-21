import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { TeamEventHelper } from '../team-event-helper';

@Component({
  selector: 'app-team-leaders',
  templateUrl: './team-leaders.component.html',
  styleUrls: ['./team-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamLeadersComponent implements OnInit {
  @Input() staffList: any = {};
  playerNameList: any = [];
  @Input() teamEventHelper: TeamEventHelper = new TeamEventHelper();
  constructor() { }

  ngOnInit(): void {
  }

  filterPlayer(jobdescription: any){
    this.playerNameList = this.staffList.filter((x: any) => x.jobdescription == jobdescription);
  }
  mapPlayerPlayerOne(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P1 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P1 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P1 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerTwo(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P2 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P2 = player?.team_id;
    this.teamEventHelper.teamStaff.signature_P2 = player?.signature;
    this.teamEventHelper.teamStaff.player_image_P2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  
  mapPlayerPlayerThree(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P3 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P3 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P3 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerFour(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P4 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P4 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P4 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerFive(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P5 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P5 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P5 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }


  mapPlayerPlayerSix(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P6 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P6 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P6 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }


  mapPlayerPlayerSeven(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P7 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P7 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P7 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerEight(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P8 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P8 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P8 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerNine(name: any){
    const player = this.staffList.find((x: any) => x.name == name);
    this.teamEventHelper.teamStaff.name_P9 = player?.name;
    this.teamEventHelper.teamStaff.team_id_P9 = player?.team_id
    this.teamEventHelper.teamStaff.signature_P9 = player?.signature
    this.teamEventHelper.teamStaff.player_image_P9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }
}
