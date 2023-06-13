import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UploadHelper } from '../upload-helper';

@Component({
  selector: 'app-upload-results',
  templateUrl: './upload-results.component.html',
  styleUrls: ['./upload-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadResultsComponent implements OnInit {

  @Input() uploadHelper: UploadHelper = new UploadHelper();

  constructor() {}

  ngOnInit(): void {}
}


