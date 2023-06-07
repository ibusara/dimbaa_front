import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';
import { UsersService } from 'src/app/persistence/functionalities/users/users.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Username', key: 'username' },
      { name: 'Fullname', key: 'fullname' },
      { name: 'Role', key: 'role' },
      { name: 'Mobile', key: 'mobile' },
    ],
    data: [
     
    ],
    options: {
      edit: true
    }
  }

  constructor(private userService :UsersService ,private cdr: ChangeDetectorRef ) { 


  }

  ngOnInit(): void {
console.log(1);    
      this.userService.getUsers().subscribe( 
        (values :any) => {
          console.log(values);
          for( let value of values.users){
            this.table.data.push( this.adapt(value));
            console.log(value);
          }
          console.log(this.table.data);
          this.cdr.markForCheck();
          this.cdr.detectChanges();
           
        }

      );
      
      
  }
    
  adapt( value :any ){
    const res = {
    username : value.id,
    fullname : value.name,
    role : value.role,
    mobile : value.mobile,
    id : value.id,
    }
    return res;
  }

  handleEdit(e: any) {
    console.log(e);
    this.editData=e;
    this.toggleEditModal.next(true)
  }

  handleViewMobile(event: any) {
    console.log(event);

  }
}
