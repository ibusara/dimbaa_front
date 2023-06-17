import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class generalCoordinatorService {
  url: string = 'https://be-tblp.dimbaa.com/api/';

  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  getGCList(): Observable<any> {
    return this.http.get(
      this.url + 'general-coordinator/list-match-events',
      this.appUtils.GetAppApiHeaders()
    );
  }

  getGCDetails(): Observable<any> {
    return this.http.get(
      this.url + 'general-coordinator/details',
      this.appUtils.GetAppApiHeaders()
    );
  }

  createGCMeeting(model: any) {
    return this.http.post(
      this.url + 'general-coordinator/coordination-meeting',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }
  createGCTeamResult(model: any) {
    return this.http.post(
      this.url + 'general-coordinator/team-results',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  createGCMatchOffcial(model: any) {
    return this.http.post(
      this.url + 'general-coordinator/match_official',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }
  createGCMatchCondtion(model: any) {
    return this.http.post(
      this.url + 'general-coordinator/pitch-condition',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }
  createGCNameEnviroment(model: any) {
    return this.http.post(
      this.url + 'general-coordinator/name',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }
}
