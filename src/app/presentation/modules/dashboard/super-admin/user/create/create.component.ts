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

  ngOnInit(): void {
  }

  add() {
   console.log('modal');
    let model: any = {};
    (model['name'] = this.user.name),
    (model['role'] = this.user.role),
      (model['mobile'] = this.user.mobile),
      (model['email'] = this.user.email) ;
      console.log(model);
    this.userService.createUser(model).subscribe((res: any) => {
      alert(res.message);
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
