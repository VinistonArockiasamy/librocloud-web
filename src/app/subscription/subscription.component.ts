import { Component, OnInit } from '@angular/core';
import { gridColumns } from '../browse-grid/grid-columns';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public tableColumns: Array<any> = gridColumns;
  constructor() {}
  public ngOnInit(): void {}
}
