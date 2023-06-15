import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/persistence/functionalities/users/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCreateComponent implements OnInit {

  message: any = null
  user: User = new User();

  toggleEditModal: Subject<boolean> = new Subject();
  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef,
    private userService :UsersService ,
  ) { }

  toggleModal: Subject<boolean> = new Subject();
    roles= [
      {"desc":"SUPER_ADMIN","id": 1 },
      {"desc":"TEAM_ADMIN","id": 2 },
      {"desc":"TEAM_MANAGER","id": 3 },
      {"desc":"REFEREE","id": 4 },
      {"desc":"DATA_MANAGER","id": 5 },
      {"desc":"LEAGUE_DIRECTOR","id": 7 },
      {"desc":"GENERAL_COORDINATOR","id": 6 },
      
      {"desc":"MATCH_COMMISSIONER","id": 8 },
      {"desc":"REFEREE_ASSESSOR","id": 9 },
      
    ];
  ngOnInit(): void {

  }

  add() {
   console.log('modal');
    let model: any = {};
    (model['name'] = this.user.name),
    (model['role_id'] = this.user.role),
      (model['mobile'] = this.user.mobile),
      (model['email'] = this.user.email) ,
      (model['password'] = "123456"),
      (model['c_password'] = "123456");
      console.log(model);
    this.userService.createUser(model).subscribe((res: any) => {
      
         this.message = {
      type: "success",
      title: "Success",
      message: res.message
    }
    this.resetMessage();
    });
    
  /*  this.message = {
      type: "success",
      title: "Success",
      message: "User added successfully"
    }
    this.resetMessage()*/
  }

  closeModal() {
    this.toggleModal.next(true)
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }
}
