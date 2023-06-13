import { Component, OnInit } from '@angular/core';
import { UploadHelper } from './upload-helper';
import { RefreeService } from 'src/app/core/services/refree.service';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  step = 9;

  uploadHelper: UploadHelper = new UploadHelper();

  constructor(private refereeService: RefreeService) {}

  ngOnInit(): void {}

  next() {
    this.onSave();
    if (this.step < 5) {
      this.step += 1;
    }
  }

  onSave() {
    switch (this.step) {
      case 2:
        this.saveUploadResult();
        break;
      case 7:
        this.saveSubstitution();
        break;
    }
  }

  saveUploadResult() {
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
    this.refereeService.createTeam(model).subscribe((response: any) => {
      if (response) {
        alert(response.message);
      }
    });
  }

  saveOfficialandPlayers() {
    let model: any = {};
    model['match'] = 1;
    // model['team1_starting'] = halfTeam;
    // model['team2_starting'] = fullTeam;
    this.refereeService
      .matchStartingPlayer(model)
      .subscribe((response: any) => {
        if (response) {
          alert(response.message);
        }
      });
  }

  saveStartingPlayer() {
    let model: any = {};
    model['match'] = 1;
    this.refereeService
      .matchStartingPlayer(model)
      .subscribe((response: any) => {
        if (response) {
          alert(response.message);
        }
      });
  }

  saveReservePlayer() {
    let model: any = {};
    model['match'] = 1;
    this.refereeService.matchReservePlayer(model).subscribe((response: any) => {
      if (response) {
        alert(response.message);
      }
    });
  }

  saveSubstitution() {
    let model: any = {};
    model['match'] = "1";
    model['team'] = this.uploadHelper.substitution.team;
    model['minute'] = this.uploadHelper.substitution.minute;
    model['in'] = this.uploadHelper.substitution.in;
    model['player'] = this.uploadHelper.substitution.player;
    this.refereeService.matchSubstitution(model).subscribe((response: any) => {
      if (response) {
        alert(response.message);
      }
    });
  }
}
