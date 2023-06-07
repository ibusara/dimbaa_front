import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  getRecords(): Observable<any> {
    return this.http.get(
      'https://be-tblp.dimbaa.com/api/admin/stadia?searchText=Dar&orderBy=id&orderByDirection=desc',
      this.appUtils.GetAppApiHeaders()
    );
  }
}
