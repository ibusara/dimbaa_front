import { Component } from '@angular/core';
import { TeamManagerService } from 'src/app/core/services/team-manager.service';

@Component({
  selector: 'app-play-formation',
  templateUrl: './play-formation.component.html',
  styleUrls: ['./play-formation.component.scss']
})
export class PlayFormationComponent {
  formation = null;
  constructor( private teamManagerService: TeamManagerService) { }
  setData(value: any){
    if(value){
      this.formation = value.target.value;
    }
  }
  ngOnInit(): void {
   
  }

}
