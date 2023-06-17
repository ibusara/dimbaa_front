import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventHelper } from '../event-helper';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnvironmentComponent implements OnInit {
  @Input() eventHelper: EventHelper = new EventHelper();
  constructor() { }

  ngOnInit(): void {
  }

}
