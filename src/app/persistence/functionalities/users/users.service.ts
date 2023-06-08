import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BackendApiService {
createUser(model: any) {
  return this.post( 'admin/users' ,model );
}
updateUser(model: any) {
  return this.put( 'admin/users/'+model.id ,model );
}
getUsers(){
  return this.get( 'admin/users');
}

}
