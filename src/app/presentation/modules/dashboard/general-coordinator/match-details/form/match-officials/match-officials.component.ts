import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventHelper } from '../event-helper';
import { GeneralCoordinatorService } from 'src/app/core/services/general-cordinator.service';

@Component({
  selector: 'app-match-officials',
  templateUrl: './match-officials.component.html',
  styleUrls: ['./match-officials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchOfficialsComponent implements OnInit {
  @Input() eventHelper: EventHelper = new EventHelper();
  constructor( private generalCoordinatorService: GeneralCoordinatorService) { }
  regions : any = [];
  allUsers = [{
    id: 1,
    name: "Match official",
  },{
    id: 2,
    name: "Match official 2",
  }];
  ngOnInit(): void {
    this.getRegions();
  }
  getRegions() {
    this.generalCoordinatorService.getRegions().subscribe((res: any) => {
      if (res) {
        this.regions = res?.Content;
      }
    });
  }

}
