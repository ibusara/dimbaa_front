import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TeamEventHelper } from '../team-event-helper';
import { TeamManagerService } from 'src/app/core/services/team-manager.service';

@Component({
  selector: 'app-substitutions',
  templateUrl: './substitutions.component.html',
  styleUrls: ['./substitutions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubstitutionsComponent implements OnInit {
  playerNameList: any = [];
  @Input() subPlayersList: any = {};
  constructor( private teamManagerService: TeamManagerService) { }
  @Input() teamEventHelper: TeamEventHelper = new TeamEventHelper();
  ngOnInit(): void {
  }
  filterPlayer(playing_position: any){
    console.log(this.subPlayersList);
    this.playerNameList = this.subPlayersList.filter((x: any) => x.playing_position == playing_position);
  }

  mapPlayerPlayerOne(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P1 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P1 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P1 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P1 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerTwo(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P2 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P2 = player?.jersey_number;
    this.teamEventHelper.teamPlayingXI.fifa_id_P2 = player?.fifa_id;
    this.teamEventHelper.teamPlayingXI.signature_P2 = player?.signature;
    this.teamEventHelper.teamPlayingXI.player_image_P2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  
  mapPlayerPlayerThree(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P3 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P3 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P3 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P3 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerFour(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P4 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P4 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P4 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P4 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerFive(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P5 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P5 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P5 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P5 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }


  mapPlayerPlayerSix(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P6 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P6 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P6 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P6 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }


  mapPlayerPlayerSeven(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P7 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P7 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P7 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P7 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerEight(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P8 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P8 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P8 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P8 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }

  mapPlayerPlayerNine(name: any){
    const player = this.playerNameList.find((x: any) => x.first_name == name);
    this.teamEventHelper.teamPlayingXI.first_name_P9 = player?.first_name;
    this.teamEventHelper.teamPlayingXI.jersey_number_P9 = player?.jersey_number
    this.teamEventHelper.teamPlayingXI.fifa_id_P9 = player?.fifa_id
    this.teamEventHelper.teamPlayingXI.signature_P9 = player?.signature
    this.teamEventHelper.teamPlayingXI.player_image_P9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s'
  }
}
