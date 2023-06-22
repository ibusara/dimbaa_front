import { Component, Input } from '@angular/core';
import { TeamManagerService } from 'src/app/core/services/team-manager.service';
import { TeamEventHelper } from '../team-event-helper';

@Component({
  selector: 'app-play-formation',
  templateUrl: './play-formation.component.html',
  styleUrls: ['./play-formation.component.scss']
})
export class PlayFormationComponent {
  formation = null;
  @Input() teamEventHelper: TeamEventHelper = new TeamEventHelper();
  @Input() playFormation: any = {};
  constructor( private teamManagerService: TeamManagerService) { }

  filterFormation(type: any){
    this.formation = type;
    const formation = this.playFormation.find((x: any) => x.type == type);
    this.teamEventHelper.playFormation.image = '/assets/433attack-minded-midfield.jpeg';
  }
  ngOnInit(): void {
   // /assets/433attack-minded-midfield.jpeg
  }

}
