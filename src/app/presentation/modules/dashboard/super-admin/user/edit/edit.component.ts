import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/persistence/functionalities/users/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit {

  @Input() data!: any

  message: any = null
  user : User =new User;

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef,
    private userService :UsersService ,
  ) { }

  ngOnInit(): void {
  }

  update() {
   /* this.message = {
      type: "success",
      title: "Success",
      message: "Update success"
    }
    this.resetMessage()
    */
    console.log('modal');
    let model: any = {};
    (model['name'] = this.user.name),
    (model['role'] = this.user.role),
      (model['mobile'] = this.user.mobile),
      (model['id'] = this.user.id),
      (model['email'] = this.user.email) ;
      console.log(model);
    this.userService.updateUser(model).subscribe((res: any) => {
      alert(res.message);
    });
  }

  delete() {
    this.message = {
      type: "confirm",
      message: "Are you sure you want to delete this user?"
    }
    // this.resetMessage()
  }

  reset() {
    this.message = {
      type: "error",
      title: "Oops!",
      message: "Something went wrong please try again later"
    }
    this.resetMessage()
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }

  handleConfirm(e: any) {
    if (e) {
      this.message = {
        type: "success",
        title: "Success",
        message: "Item deleted successfully"
      }
      this.resetMessage()
    } else {
      this.message = null
    }
  }
  ngOnChanges(){
    console.log(1);
    console.log(this.data);
  }
  ngDoCheck(){
    console.log(2);
    console.log(this.data);
    this.user.role=this.data?.role;
    this.user.name=this.data?.fullname;
    this.user.mobile=this.data?.mobile;
    this.user.id=this.data?.id;
   
    this.ref.markForCheck();
    this.ref.detectChanges();
  }
  /*
  ngAfterContentInit (){
    console.log(3);
    console.log(this.data);
  }
  ngAfterContentChecked() {
    console.log(4);
    console.log(this.data);
  }
  ngAfterViewInit(){
    console.log(5);
    console.log(this.data);
  }*/
}
