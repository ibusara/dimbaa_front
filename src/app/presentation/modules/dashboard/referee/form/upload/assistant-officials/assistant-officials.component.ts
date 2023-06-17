import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UploadHelper } from '../upload-helper';

@Component({
  selector: 'app-assistant-officials',
  templateUrl: './assistant-officials.component.html',
  styleUrls: ['./assistant-officials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantOfficialsComponent implements OnInit {
  @Input() uploadHelper: UploadHelper = new UploadHelper();

  constructor() {}

  ngOnInit(): void {}
}
