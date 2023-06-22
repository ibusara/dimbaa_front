import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamEventHelper } from '../team-event-helper';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitComponent implements OnInit {
  isChecked = false;
  @Output()
  checkBoxClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() teamEventHelper: TeamEventHelper = new TeamEventHelper();
  @Input() teams: any = {};
  constructor() { }
  ngOnInit(): void {
    this.checkBoxClick.emit(true);
  }

  setData(data: any){

  }
  
  setCheckbox(event: any){
    this.checkBoxClick.emit(this.isChecked);
  }

}
