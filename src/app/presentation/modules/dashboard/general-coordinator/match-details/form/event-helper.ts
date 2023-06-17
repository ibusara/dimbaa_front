export class EventHelper {
  public gcMeeting: GCMeeting = new GCMeeting();
  public gcTeamResult: GCTeamResult = new GCTeamResult();
  public gcMatchOffcial: GCMatchOffcial = new GCMatchOffcial();
  public gcMatchCondition: GCMatchCondition = new GCMatchCondition();
  public gcNameEnvironment: GCNameEnvironment = new GCNameEnvironment();
}

export class GCMeeting {
  id: string = '';
  match_id: string = '';
  match_coordination_meeting: string = '';
  meeting_date: string = '';
  if_no_meeting: string = '';
  comment: string = '';
  tff_flag_raised: string = '';
  tff_on_the_pole: string = '';
  play_fair_flag_raised: string = '';
  pff_on_the_pole: string = '';
  position_benches_respected_both_teams: string = '';
  not_respected_reason: string = '';
  performance_flag_bearers: string = '';
  performance_ball_boys: string = '';
  performance_team_escorts: string = '';
  teams_behaviour: string = '';
  created_at: string = '';
  updated_at: string = '';
}

export class GCTeamResult {
  match: string = '';
  extra_time_score: string = '';
  extra_time_score_team_1: Number | undefined;
  extra_time_score_team_2: Number | undefined;
  penalty_team_1: string = '';
  penalty_team_2: string = '';
  favour_of_team_1: string = '';
  favour_of_team_2: string = '';
  final_score_favour_team_1: Number | undefined;
  final_score_favour_team_2: Number | undefined;
  final_score_extra_team_1: string = '';
  final_score_extra_team_2: string = '';
  created_at: string = '';
  updated_at: string = '';
}

export class GCMatchOffcial {
  id: string = '';
  match_id: string = '';
  user_id: string = '';
  referee: string = '';
  referee_user: string = '';
  referee_region: string = '';
  assistant_referee_one: string = '';
  assistant_referee_one_user: string = '';
  assistant_referee_one_region: string = '';
  assistant_referee_two: string = '';
  assistant_referee_two_user: string = '';
  assistant_referee_two_region: string = '';
  fourth_official: string = '';
  fourth_official_user: string = '';
  fourth_official_region: string = '';
  commissionar: string = '';
  commissionar_user: string = '';
  commissionar_region: string = '';
  match_doctor: string = '';
  match_doctor_user: string = '';
  match_doctor_region: string = '';
  officer_for_marketing: string = '';
  officer_for_marketing_user: string = '';
  officer_for_marketing_region: string = '';
  media_officer: string = '';
  media_officer_user: string = '';
  media_officer_region: string = '';
  security_officer: string = '';
  security_officer_user: string = '';
  security_officer_region: string = '';
  general_coordinator: string = '';
  general_coordinator_user: string = '';
  general_coordinator_region: string = '';
  created_at: string = '';
  updated_at: string = '';
}

export class GCMatchCondition {
  id: string = '';
  match_id: string = '';
  user_id: string = '';
  incident_during_team_check: string = '';
  incident_reason: string = '';
  pitch_condition: string = '';
  dressing_room_condition: string = '';
  stretcher_available: string = '';
  ambulance_available: string = '';
  no_of_stretcher: string = '';
  no_of_ambulance: string = '';
  created_at: string = '';
  updated_at: string = '';
}

export class GCNameEnvironment {
  id: string = '';
  match_id: string = '';
  user_id: string = '';
  information: string = '';
  announcer: string = '';
  giant_screen: string = '';
  incident: string = '';
  remarks: string = '';
  name: string = '';
  date: string = '';
  created_at: string = '';
  updated_at: string = '';
}