import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class TeamManagerService {
  url: string = 'https://be-tblp.dimbaa.com/api/';

  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  getTeamPlayerList(): Observable<any> {
    return this.http.get(
      this.url + 'teammanager/players',
      this.appUtils.GetAppApiHeaders()
    );
  }
}
