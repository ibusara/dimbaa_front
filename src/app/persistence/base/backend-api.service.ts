import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  protected apiUrl: string = environment.apiUrl;
  protected headers: any = environment.headers;

  constructor(
    private http: HttpClient
  ) { }

  post<T>(url: string, data: any) {
    return this.http.post<T>(this.apiUrl + url, data, { headers: this.headers });
  }

  put<T>(url: string, data: any) {
    return this.http.put<T>(this.apiUrl + url, data, { headers: this.headers });
  }
  get<T>(url: string) {
    return this.http.get<T>(this.apiUrl + url , { headers: this.headers })
  }

  delete<T>(url: string) {
    return this.http.delete<T>(this.apiUrl + url)
  }
}
