import { Component, OnInit } from '@angular/core';
import { UploadHelper } from './upload-helper';
import { RefreeService } from 'src/app/core/services/refree.service';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  step = 9;

  uploadHelper: UploadHelper = new UploadHelper();

  constructor(private refereeService: RefreeService) { }

  ngOnInit(): void {
  }

  next() {
    this.onSave();
    if (this.step < 5) {
      this.step += 1;
    }

  }

  onSave(){
    switch(this.step){
      case 2:
        this.saveUploadResult();
        break;
    }
  }

  saveUploadResult(){

    let halfTeam: any = {};
    halfTeam['team1'] = this.uploadHelper.teamResult.halfTeamAScore;
    halfTeam['team2'] = this.uploadHelper.teamResult.halfTeamBScore;

    let fullTeam: any = {};
    fullTeam['team1'] = this.uploadHelper.teamResult.fullTeamAScore;
    fullTeam['team2'] = this.uploadHelper.teamResult.fullTeamBScore;

    let model: any = {};
    model['match'] = 1;
    model['halftime_score'] = halfTeam;
    model['final_score'] = fullTeam;
    this.refereeService.createTeam(model)
      .subscribe((response: any) => {
        if(response){
          alert(response.message);
        }
      });
  }
}
