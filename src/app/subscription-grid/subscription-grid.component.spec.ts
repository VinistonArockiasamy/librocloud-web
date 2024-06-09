import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { gridColumns } from '../browse-grid/grid-columns';
import { SubscriptionGridComponent } from './subscription-grid.component';

describe('SubscriptionGridComponent', () => {
  let component: SubscriptionGridComponent;
  let fixture: ComponentFixture<SubscriptionGridComponent>;
  let overlayContainerElement: HTMLElement;

  beforeEach(inject(
    [MatSnackBar, OverlayContainer],
    (sb: MatSnackBar, oc: OverlayContainer) => {
      overlayContainerElement = oc.getContainerElement();
      fixture = TestBed.createComponent(SubscriptionGridComponent);
      component = fixture.componentInstance;
      component.tableColumns = gridColumns;
      fixture.detectChanges();
    }
  ));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
