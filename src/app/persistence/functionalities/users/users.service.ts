import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BackendApiService {

getUsers(){
  return this.get( 'admin/users');
}

}
