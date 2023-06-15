import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Roles, User } from '../models/user.model';
import { BackendApiService } from 'src/app/persistence/base/backend-api.service';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/persistence/functionalities/users/users.service';
import { LocalStorageService } from 'src/app/persistence/base/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService   {

  isAuthenticated: boolean = false//!environment.production
  currentUser: User = new User();
    rolesCode =[
      Roles.SUPER_ADMIN ,
      Roles.SUPER_ADMIN ,
      Roles.TEAM_ADMIN ,
      Roles.TEAM_MANAGER ,
      Roles.DATA_MANAGER ,
      Roles.LEAGUE_DIRECTOR ,
      Roles.GENERAL_COORDINATOR ,
      Roles.REFEREE ,
      Roles.MATCH_COMMISSIONER ,
      Roles.REFEREE_ASSESSOR ,
      
  ];
  access_token : string='';
  constructor(public router: Router  , public userService : UsersService,
    private ls : LocalStorageService ) {
   
    //this.currentUser.role = Roles.SUPER_ADMIN
  }

  login(data: any) {
    console.log(data);
    this.userService.login(data).subscribe( (res:any) =>{
        console.log(res);
        if( res.success){
          this.isAuthenticated = true;
          this.currentUser = res.user;
          this.currentUser.role = this.rolesCode[res.user.role.id];
          this.ls.save('token', res.access_token);
          this.router.navigate(['dashboard']);
        }
    });
    /*
    this.isAuthenticated = true;
    if (data.email == "superadmin@dimbaa.com") {
      this.currentUser.role = Roles.SUPER_ADMIN
      this.router.navigate(['dashboard']);
    } else if (data.email == "teamadmin@dimbaa.com") {
      this.currentUser.role = Roles.TEAM_ADMIN
      this.router.navigate(['dashboard']);
    } else if (data.email == "teammanager@dimbaa.com") {
      this.currentUser.role = Roles.TEAM_MANAGER
      this.router.navigate(['dashboard']);
    } else if (data.email == "datamanager@dimbaa.com") {
      this.currentUser.role = Roles.DATA_MANAGER
      this.router.navigate(['dashboard']);
    } else if (data.email == "leaguedirector@dimbaa.com") {
      this.currentUser.role = Roles.LEAGUE_DIRECTOR
      this.router.navigate(['dashboard']);
    } else if (data.email == "generalcoordinator@dimbaa.com") {
      this.currentUser.role = Roles.GENERAL_COORDINATOR
      this.router.navigate(['dashboard']);
    } else if (data.email == "matchcommissioner@dimbaa.com") {
      this.currentUser.role = Roles.MATCH_COMMISSIONER
      this.router.navigate(['dashboard']);
    } else if (data.email == "referee@dimbaa.com") {
      this.currentUser.role = Roles.REFEREE
      this.router.navigate(['dashboard']);
    } else if (data.email == "refereeassessor@dimbaa.com") {
      this.currentUser.role = Roles.REFEREE_ASSESSOR
      this.router.navigate(['dashboard']);
    } else {
      alert("user not found");
      this.router.navigate(['login']);
    }*/
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = new User()
    this.router.navigate(['authentication/login']);
  }

  getUser() {
    return this.currentUser;
  }
  
}
