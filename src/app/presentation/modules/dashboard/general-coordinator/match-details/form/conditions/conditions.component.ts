import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventHelper } from '../event-helper';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent implements OnInit {
  @Input() eventHelper: EventHelper = new EventHelper();

  constructor() { }

  ngOnInit(): void {
  }

}
