import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
