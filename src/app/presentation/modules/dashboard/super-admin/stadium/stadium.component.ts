import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';
import { StadiaService } from 'src/app/persistence/functionalities/stadia/stadia.service';

@Component({
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Stadium', key: 'name' },
      { name: 'Region', key: 'region' },
      { name: 'Location', key: 'location' },
      
    ],
    data: [
   /*   { stadium: 'Stadium 1', region: 'Region 1', team: 'Team 1' },
      { stadium: 'Stadium 2', region: 'Region 2', team: 'Team 2' },
      { stadium: 'Stadium 3', region: 'Region 3', team: 'Team 3' },
      { stadium: 'Stadium 4', region: 'Region 4', team: 'Team 4' }, */
    ],
    options: {
      edit: true
    }
  }

  constructor(private stadiaService :StadiaService   ,private cdr: ChangeDetectorRef)  { }

  ngOnInit(): void {
    this.stadiaService.list().subscribe( 
      (values :any) => {
        console.log(values);
         for( let value of values.stadia){
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
      name : value.name,
      region : value.region,
      location : value.location,
      stadium_owner : value.stadium_owner,
      stadium_picture:value.stadium_picture,
    id : value.id,
    inauguration_date : value.inauguration_date
    }
    return res;
  }

  handleEdit(e: any) {
    this.editData=e;
    this.toggleEditModal.next(true)

  }
}
