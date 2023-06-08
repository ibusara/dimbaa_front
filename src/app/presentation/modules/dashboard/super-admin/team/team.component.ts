import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';
import { TeamsService } from 'src/app/persistence/functionalities/teams/teams.service';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  toggleViewModal: Subject<boolean> = new Subject();
  editData: any;
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Team', key: 'name' },
      { name: 'Region', key: 'region' },
      { name: 'Stadium', key: 'stadium' },
    ],
    data: [
    
    ],
    options: {
      edit: true ,
      view : true
    }
  }

  constructor( private teamsService : TeamsService  ,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.teamsService.list().subscribe( 
      (values :any) => {
        console.log(values);
         for( let value of values.teams){
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
      stadium_id : value.stadium_id,
      team_logo : value.team_logo,
    id : value.id,
    team_photo : value.team_photo
    }
    return res;
  }

  handleEdit(e: any) {
    this.toggleEditModal.next(true)

  }
  handleView(e: any) {
	  this.viewData=e;
	  console.log( e);
    this.toggleViewModal.next(true)

  }
}
