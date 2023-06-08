import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class RefreeService {
  url: string = 'https://be-tblp.dimbaa.com/api/';

  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  createTeam(model: any) {
    return this.http.post(
      this.url + 'referee/team-results',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  matchStartingPlayer(model: any) {
    return this.http.post(
      this.url + 'referee/starting-players',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  matchReservePlayer(model: any) {
    return this.http.post(
      this.url + 'referee/reserve-players',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  matchSubstitution(model: any) {
    return this.http.post(
      this.url + 'referee/subtitutions',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  matchCautions(model: any) {
    return this.http.post(
      this.url + 'referee/cautions',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  groundEquipment(model: any) {
    return this.http.post(
      this.url + 'referee/attitude-condition/ground-equipment',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  officialAssistant(model: any) {
    return this.http.post(
      this.url + 'referee/official-assistant',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  listMatchEvent() {
    return this.http.get(
      this.url + 'referee/list-match-events',
      this.appUtils.GetAppApiHeaders()
    );
  }

}
