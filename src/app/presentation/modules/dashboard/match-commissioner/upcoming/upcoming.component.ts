import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class MatchCommissionerUpcomingComponent implements OnInit {

  table: InnerTable = {
    headers: [
      { name: 'Number', key: 'number' },
      { name: 'Date', key: 'date' },
      { name: 'For team', key: 'forteam' },
      { name: 'Venue', key: 'venue' },
      { name: 'City', key: 'city' },
    ],
    data: [
      { number: '1', date: '2021-01-01', forteam: 'Team 1', venue: 'Venue 1', city: 'City 1' },
      { number: '2', date: '2021-01-02', forteam: 'Team 2', venue: 'Venue 2', city: 'City 2' },
      { number: '3', date: '2021-01-03', forteam: 'Team 3', venue: 'Venue 3', city: 'City 3' },
      { number: '4', date: '2021-01-04', forteam: 'Team 4', venue: 'Venue 4', city: 'City 4' },
      { number: '5', date: '2021-01-05', forteam: 'Team 5', venue: 'Venue 5', city: 'City 5' },
      { number: '6', date: '2021-01-06', forteam: 'Team 6', venue: 'Venue 6', city: 'City 6' },
      { number: '7', date: '2021-01-07', forteam: 'Team 7', venue: 'Venue 7', city: 'City 7' },
      { number: '8', date: '2021-01-08', forteam: 'Team 8', venue: 'Venue 8', city: 'City 8' },
      { number: '9', date: '2021-01-09', forteam: 'Team 9', venue: 'Venue 9', city: 'City 9' },
      { number: '10', date: '2021-01-10', forteam: 'Team 10', venue: 'Venue 10', city: 'City 10' },
      { number: '11', date: '2021-01-11', forteam: 'Team 11', venue: 'Venue 11', city: 'City 11' },
      { number: '12', date: '2021-01-12', forteam: 'Team 12', venue: 'Venue 12', city: 'City 12' }
    ],
    options: {
      customColumns: [
        {
          header: 'Pre Match Report',
          actions: [
            {
              type: 'button',
              classes: 'btn-sm btn-primary text-primary bg-white border-none hover:text-white',
              text: 'Upload',
              onClick: (row) => this.router.navigate(["/dashboard/r/match-commissioner/pre-match-report/upload"], { queryParams: { id: row.number } }),
              condition: (row) => row.number % 2 === 0
            },
            {
              type: 'button',
              classes: 'btn-sm btn-secondary text-secondary bg-white border-none hover:text-white',
              text: 'View',
              onClick: (event) => console.log(event),
              condition: (row) => row.number % 2 !== 0
            }
          ]
        },
        {
          header: 'Post Match Report',
          actions: [
            {
              type: 'button',
              classes: 'btn-sm btn-primary text-primary bg-white border-none hover:text-white',
              text: 'Upload',
              onClick: (row) =>
                this.router.navigate(["/dashboard/r/match-commissioner/post-match-report/upload"], { queryParams: { id: row.number } }),
              condition: (row) => row.number % 2 === 0
            },
            {
              type: 'button',
              classes: 'btn-sm btn-secondary text-secondary bg-white border-none hover:text-white',
              text: 'View',
              onClick: (event) => console.log(event),
              condition: (row) => row.number % 2 !== 0
            }
          ]
        }
      ]
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}