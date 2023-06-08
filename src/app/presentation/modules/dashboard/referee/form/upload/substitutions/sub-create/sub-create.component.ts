import { ChangeDetectorRef, Component, Input, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { UploadHelper } from '../../upload-helper';

@Component({
  selector: 'app-sub-create',
  templateUrl: './sub-create.component.html',
  styleUrls: ['./sub-create.component.scss'],
})
export class SubCreateComponent {
  message: any = null;

  constructor(private zone: NgZone, private ref: ChangeDetectorRef) {}

  toggleModal: Subject<boolean> = new Subject();

  @Input() uploadHelper: UploadHelper = new UploadHelper();

  ngOnInit(): void {}

  add() {
    this.message = {
      type: 'success',
      title: 'Success',
      message: 'User added successfully',
    };
    this.resetMessage();
  }

  closeModal() {
    this.toggleModal.next(true);
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null;
        this.ref.markForCheck();
      }, 1000);
    });
  }
}
