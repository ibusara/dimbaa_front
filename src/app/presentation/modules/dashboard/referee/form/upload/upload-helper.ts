export class UploadHelper {
  public teamResult: TeamResult = new TeamResult();
  public officialAndPlayer: OfficialAndPlayers = new OfficialAndPlayers();
  public substitution: Substitution = new Substitution();
}

export class TeamResult {
  halfTeamAScore: string = '';
  halfTeamBScore: string = '';
  fullTeamAScore: string = '';
  fullTeamBScore: string = '';
}

export class OfficialAndPlayers{
  teamAStarting: number[] = [];
  teamBStarting: number[] = [];
}

export class Substitution{
  match: string = '';
  team: string = '';
  minute: string = '';
  in: string = '';
  player: string = '';
}
