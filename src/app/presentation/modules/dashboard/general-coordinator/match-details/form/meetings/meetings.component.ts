import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventHelper } from '../event-helper';
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetingsComponent implements OnInit {
  @Input() eventHelper: EventHelper = new EventHelper();
  constructor() { }
  ngOnInit(): void {
  }
}
