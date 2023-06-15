import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class TeamManagementService {
  url: string = 'https://be-tblp.dimbaa.com/api/';

  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  getTeamList(): Observable<any> {
    return this.http.get(
      this.url + 'admin/teams',
      this.appUtils.GetAppApiHeaders()
    );
  }

  getTournamentList(){
    return this.http.get(
      this.url + 'organizers/tournaments',
      this.appUtils.GetAppApiHeaders()
    );
  }

}
