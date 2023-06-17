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
      case 4:
        this.saveStartingPlayer();
        break;
      case 5:
        this.saveReservePlayer();
        break;
      case 7:
        this.saveSubstitution();
        break;
      case 9:
        this.saveAssistants();
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

    let team1Starting: any = {};
    team1Starting['stadium_id'] = '1';
    team1Starting['name'] = '1';
    team1Starting['region'] = '1';

    let team2Starting: any = {};
    team2Starting['stadium_id'] = '1';
    team2Starting['name'] = '1';
    team2Starting['region'] = '1';

    model['match'] = 1;
    model['team1_starting'] = team1Starting;
    model['team2_starting'] = team2Starting;
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

    let team1Reserve: any = {};
    team1Reserve['stadium_id'] = '1';
    team1Reserve['name'] = '1';
    team1Reserve['region'] = '1';

    let team2Reserve: any = {};
    team2Reserve['stadium_id'] = '1';
    team2Reserve['name'] = '1';
    team2Reserve['region'] = '1';

    model['match'] = 1;
    model['team1_reserve'] = team1Reserve;
    model['team1_reserve'] = team2Reserve;
    this.refereeService.matchReservePlayer(model).subscribe((response: any) => {
      if (response) {
        alert(response.message);
      }
    });
  }

  saveSubstitution() {
    let model: any = {};
    model['match'] = '1';
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

  saveCaution() {
    let model: any = {};
    model['match'] = '1';
    model['team'] = this.uploadHelper.substitution.team;
    model['minute'] = this.uploadHelper.substitution.minute;
    model['warning_card'] = this.uploadHelper.substitution.in;
    model['player'] = this.uploadHelper.substitution.player;
    this.refereeService.matchSubstitution(model).subscribe((response: any) => {
      if (response) {
        alert(response.message);
      }
    });
  }

  saveAssistants(){
    let model:any = {};
    model['match'] = '1';
    model['full_name'] = this.uploadHelper.assistantOfficial.fullName;
    model['district'] = this.uploadHelper.assistantOfficial.district;
    model['region'] = this.uploadHelper.assistantOfficial.region;
    model['tel_number'] = this.uploadHelper.assistantOfficial.telNumber;
    model['email'] = this.uploadHelper.assistantOfficial.email;
    model['game_no_tpl'] = this.uploadHelper.assistantOfficial.gameNoTpl;
    model['game_no_other'] = this.uploadHelper.assistantOfficial.gameNoOther;
    model['match_payment'] = this.uploadHelper.assistantOfficial.matchPayment;
    model['commissioner'] = this.uploadHelper.assistantOfficial.commissioner;
    // model['referee_assessor'] =
    //   this.uploadHelper.assistantOfficial.refereeAccessor;

    this.refereeService.officialAssistant(model)
      .subscribe((response: any) => {
        alert(response.message);
      })
  }
}
