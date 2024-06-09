import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { gridColumns } from './grid-columns';
import { BrowseGridComponent } from './browse-grid.component';

describe('BrowseGridComponent', () => {
  let component: BrowseGridComponent;
  let fixture: ComponentFixture<BrowseGridComponent>;
  let overlayContainerElement: HTMLElement;

  beforeEach(inject(
    [MatSnackBar, OverlayContainer],
    (sb: MatSnackBar, oc: OverlayContainer) => {
      overlayContainerElement = oc.getContainerElement();
      fixture = TestBed.createComponent(BrowseGridComponent);
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
