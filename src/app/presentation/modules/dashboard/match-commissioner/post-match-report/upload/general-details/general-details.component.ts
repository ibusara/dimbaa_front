import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
