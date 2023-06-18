import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { EventHelper } from './event-helper';
import { generalCoordinatorService } from 'src/app/core/services/general-cordinator.service';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class MatchDetailFormComponent implements OnInit {
  message: any = null;
  detailsData: any = {};
  eventHelper: EventHelper = new EventHelper();
  step = 1
  constructor(private generalCoordinatorService: generalCoordinatorService,
    private ref: ChangeDetectorRef
  ) { }
  toggleModal: Subject<boolean> = new Subject();
  ngOnInit(): void {
    this.SuccessPopUp();
    this.getDetails();
  }
  getDetails() {
    this.generalCoordinatorService.getGCDetails().subscribe((res: any) => {
      if (res) {
        this.detailsData = res?.data;
        console.log(this.detailsData);
      }
    });
  }
  next() {
    if (this.step == 6) {
      this.saveNameEnviroment();
      return;
    }
    if (this.step < 6) {
      this.step += 1;
    }
  }
  onSave() {
    switch (this.step) {
      case 2:
        this.saveResult();
        break;
      case 3:
        this.saveMatchOfficials();
        break;
      case 4:
        this.saveMeeting();
        break;
      case 5:
        this.saveCondition();
        break;
      case 6:
        this.saveNameEnviroment();
        break;
    }
  }

  saveResult() {
    let extraTimeScore: any = {};
    extraTimeScore['team1'] = this.eventHelper.gcTeamResult.final_score_extra_team_1;
    extraTimeScore['team2'] = this.eventHelper.gcTeamResult.final_score_extra_team_2;
    extraTimeScore['favour_of'] = this.eventHelper.gcTeamResult.favour_of_team_1;

    let penalty: any = {};
    penalty['team1'] = this.eventHelper.gcTeamResult.penalty_team_1;
    penalty['team2'] = this.eventHelper.gcTeamResult.penalty_team_2;
    penalty['favour_of'] = this.eventHelper.gcTeamResult.favour_of_team_1;

    let finalScore: any = {};
    finalScore['team1'] = this.eventHelper.gcTeamResult.final_score_favour_team_1;
    finalScore['team2'] = this.eventHelper.gcTeamResult.final_score_favour_team_2;
    finalScore['favour_of'] = this.eventHelper.gcTeamResult.favour_of_team_2;

    let model: any = {};
    model['match'] = 1;
    model['extra_time_score'] = extraTimeScore;
    model['penalty'] = penalty;
    model['final_score'] = finalScore;
    this.generalCoordinatorService.createGCTeamResult(model).subscribe((res: any) => {
      if (res) {
        this.SuccessPopUp(res?.message);
      }
    });
  }

  saveMatchOfficials() {
    let referee: any = {};
    referee['user'] = this.eventHelper.gcMatchOffcial.referee_user;
    referee['region'] = this.eventHelper.gcMatchOffcial.referee_region;

    let assistantRefereeOne: any = {};
    assistantRefereeOne['user'] = this.eventHelper.gcMatchOffcial.assistant_referee_one_user;
    assistantRefereeOne['reagion'] = this.eventHelper.gcMatchOffcial.assistant_referee_one_region;

    let assistantRefereTwo: any = {};
    assistantRefereTwo['user'] = this.eventHelper.gcMatchOffcial.assistant_referee_two_user;
    assistantRefereTwo['region'] = this.eventHelper.gcMatchOffcial.assistant_referee_two_region;

    let fourthOfficial: any = {};
    fourthOfficial['user'] = this.eventHelper.gcMatchOffcial.fourth_official_user;
    fourthOfficial['region'] = this.eventHelper.gcMatchOffcial.fourth_official_region;

    let commissionar: any = {};
    commissionar['user'] = this.eventHelper.gcMatchOffcial.commissionar_user;
    commissionar['region'] = this.eventHelper.gcMatchOffcial.commissionar_region;

    let matchDoctor: any = {};
    matchDoctor['user'] = this.eventHelper.gcMatchOffcial.match_doctor_user;
    matchDoctor['region'] = this.eventHelper.gcMatchOffcial.match_doctor_region;

    let officerForMarketing: any = {};
    officerForMarketing['user'] = this.eventHelper.gcMatchOffcial.media_officer_user;
    officerForMarketing['region'] = this.eventHelper.gcMatchOffcial.media_officer_region;

    let mediaOfficer: any = {};
    mediaOfficer['user'] = this.eventHelper.gcMatchOffcial.media_officer_user;
    mediaOfficer['region'] = this.eventHelper.gcMatchOffcial.media_officer_region;

    let securityOfficer: any = {};
    securityOfficer['user'] = this.eventHelper.gcMatchOffcial.security_officer_user;
    securityOfficer['region'] = this.eventHelper.gcMatchOffcial.security_officer_region;

    let generalCoordinator: any = {};
    generalCoordinator['user'] = this.eventHelper.gcMatchOffcial.general_coordinator_user;
    generalCoordinator['region'] = this.eventHelper.gcMatchOffcial.general_coordinator_region;

    let model: any = {};
    model['match'] = 1;
    model['referee'] = referee;
    model['assistant_referee_one'] = assistantRefereeOne;
    model['assistant_referee_two'] = assistantRefereTwo;
    model['fourth_official'] = fourthOfficial;
    model['commissionar'] = commissionar;
    model['match_doctor'] = matchDoctor;
    model['officer_for_marketing'] = officerForMarketing;
    model['media_officer'] = mediaOfficer;
    model['security_officer'] = securityOfficer;
    model['general_coordinator'] = generalCoordinator;
    this.generalCoordinatorService.createGCMatchOffcial(model).subscribe((res: any) => {
      if (res) {
        this.SuccessPopUp(res?.message);
      }
    });
  }

  saveMeeting() {
    let model: any = {};
    model['id'] = 1;
    model['match'] = '5';
    model['meeting_date'] = this.eventHelper.gcMeeting.meeting_date;
    model['if_no_meeting'] = this.eventHelper.gcMeeting.if_no_meeting;
    model['comment'] = this.eventHelper.gcMeeting.comment;
    model['tff_flag_raised'] = this.eventHelper.gcMeeting.tff_flag_raised;
    model['tff_on_the_pole'] = this.eventHelper.gcMeeting.tff_on_the_pole;
    model['play_fair_flag_raised'] = this.eventHelper.gcMeeting.play_fair_flag_raised;
    model['pff_on_the_pole'] = this.eventHelper.gcMeeting.pff_on_the_pole;
    model['position_benches_respected_both_teams'] = this.eventHelper.gcMeeting.position_benches_respected_both_teams;
    model['not_respected_reason'] = this.eventHelper.gcMeeting.not_respected_reason;
    model['performance_flag_bearers'] = this.eventHelper.gcMeeting.performance_flag_bearers;
    model['performance_ball_boys'] = this.eventHelper.gcMeeting.performance_ball_boys;
    model['performance_team_escorts'] = this.eventHelper.gcMeeting.performance_team_escorts;
    model['teams_behaviour'] = this.eventHelper.gcMeeting.teams_behaviour;
    model['created_at'] = new Date();
    this.generalCoordinatorService.createGCMeeting(model).subscribe((res: any) => {
      if (res) {
        this.SuccessPopUp(res?.message);
      }
    });
  }

  saveCondition() {
    let model: any = {};
    model['id'] = 1;
    model['match'] = '5';
    model['incident_during_team_check'] = this.eventHelper.gcMatchCondition.incident_during_team_check;
    model['incident_reason'] = this.eventHelper.gcMatchCondition.incident_reason;
    model['pitch_condition'] = this.eventHelper.gcMatchCondition.pitch_condition;
    model['dressing_room_condition'] = this.eventHelper.gcMatchCondition.dressing_room_condition;
    model['stretcher_available'] = this.eventHelper.gcMatchCondition.stretcher_available;
    model['ambulance_available'] = this.eventHelper.gcMatchCondition.ambulance_available;
    model['no_of_stretcher'] = this.eventHelper.gcMatchCondition.no_of_stretcher;
    model['no_of_ambulance'] = this.eventHelper.gcMatchCondition.no_of_ambulance;
    model['created_at'] = new Date();
    this.generalCoordinatorService.createGCMatchCondtion(model).subscribe((res: any) => {
      if (res) {
        this.SuccessPopUp(res?.message);
      }
    });
  }

  saveNameEnviroment() {
    let model: any = {};
    model['id'] = 1;
    model['match'] = '5';
    model['information'] = this.eventHelper.gcNameEnvironment.information;
    model['giant_screen'] = this.eventHelper.gcNameEnvironment.giant_screen;
    model['announcer'] = this.eventHelper.gcNameEnvironment.announcer;
    model['incident'] = this.eventHelper.gcNameEnvironment.incident;
    model['remarks'] = this.eventHelper.gcNameEnvironment.remarks;
    model['name'] = this.eventHelper.gcNameEnvironment.name;
    model['date'] = this.eventHelper.gcNameEnvironment.date;
    model['created_at'] = new Date();
    this.generalCoordinatorService.createGCNameEnviroment(model).subscribe((res: any) => {
      if (res) {
        this.SuccessPopUp(res?.message);
      }
    });
  }

  SuccessPopUp(message?: any) {
    this.toggleModal.next(true);
    this.message = {
      type: 'success',
       title: 'Success',
      message: message,
    };
  }

  closeModal() {
    this.toggleModal.next(true);
  }
}
