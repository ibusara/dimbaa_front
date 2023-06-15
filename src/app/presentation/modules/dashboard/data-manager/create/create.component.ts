import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-manager-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataManagerCreateComponent implements OnInit {
  @Input() teamList: any = [];
  @Input() stadiumList: any = [];
  @Input() tournamentList: any = [];

  form: 'match' | 'tournament' = 'match';

  message: any = null;

  constructor(private zone: NgZone, private ref: ChangeDetectorRef) {}

  toggleModal: Subject<boolean> = new Subject();

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
