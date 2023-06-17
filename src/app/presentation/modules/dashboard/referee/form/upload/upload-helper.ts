export class UploadHelper {
  public teamResult: TeamResult = new TeamResult();
  public officialAndPlayer: OfficialAndPlayers = new OfficialAndPlayers();
  public substitution: Substitution = new Substitution();
  public assistantOfficial: AssistantOfficial = new AssistantOfficial();
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

export class AssistantOfficial{
  fullName:string[] = [];
  district: string[] = [];
  region: string[] = [];
  telNumber:string[] = [];
  email: string[] = [];
  gameNoTpl:string[] = [];
  gameNoOther:string[] = [];
  matchPayment:string[] = [];
  commissioner:string[] = [];
  refereeAccessor:string[] = [];
}
