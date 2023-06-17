import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { generalCoordinatorService } from 'src/app/core/services/general-cordinator.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {

  constructor(private generalCoordinatorService: generalCoordinatorService) { }

  ngOnInit(): void {
 //   this.getDetails();
  }
  getDetails() {
    this.generalCoordinatorService.getGCDetails().subscribe((res: any) => {
      if (res) {
       // this.table.data = res.match;
      }
    });
  }
}
