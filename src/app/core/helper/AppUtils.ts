import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/persistence/base/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppUtils {
  constructor(private ls :LocalStorageService) {}

  public GetAppApiHeaders() {
    const requestOptions = { headers: this.getHeaders() };
    return requestOptions;
  }

  getHeaders(){
    let headers= {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '+this.ls.retrieve('token'),
       
    }
    return headers;
  }
}
