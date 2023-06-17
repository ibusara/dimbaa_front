import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventHelper } from '../event-helper';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {
  @Input() eventHelper: EventHelper = new EventHelper();
  constructor() { }

  ngOnInit(): void {
  }

}
