import { Component, OnInit } from '@angular/core';
import { gridColumns } from '../browse-grid/grid-columns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tableColumns: Array<any> = gridColumns;
  constructor() {}
  public ngOnInit(): void {}
}
