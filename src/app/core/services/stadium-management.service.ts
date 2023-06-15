import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class StadiumManagementService {
  url: string = 'https://be-tblp.dimbaa.com/api/';

  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  getStadiumList(): Observable<any> {
    return this.http.get(
      this.url + 'admin/stadia',
      this.appUtils.GetAppApiHeaders()
    );
  }

}
