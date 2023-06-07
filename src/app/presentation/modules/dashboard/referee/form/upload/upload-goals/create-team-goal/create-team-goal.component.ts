import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-team-goal',
  templateUrl: './create-team-goal.component.html',
  styleUrls: ['./create-team-goal.component.scss']
})
export class CreateTeamGoalComponent {
  message: any = null

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  toggleModal: Subject<boolean> = new Subject();

  ngOnInit(): void {
  }

  add() {
    this.message = {
      type: "success",
      title: "Success",
      message: "User added successfully"
    }
    this.resetMessage()
  }

  closeModal() {
    this.toggleModal.next(true)
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }
}
