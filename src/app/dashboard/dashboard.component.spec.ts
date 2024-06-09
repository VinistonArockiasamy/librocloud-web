import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have filter element', () => {
    const divDashboardElement = fixture.nativeElement.querySelector(
      'div.dashboard'
    );
    const divElement = divDashboardElement.querySelector('div.side-bar');
    const filterElement = divElement.querySelector('app-filter');
    expect(filterElement).not.toBe(null);
    expect(filterElement).not.toBe(undefined);
  });

  it('should have grid element', () => {
    const divDashboardElement = fixture.nativeElement.querySelector(
      'div.dashboard'
    );
    const divElement = divDashboardElement.querySelector('div.content');
    const gridElement = divElement.querySelector('app-grid');
    expect(gridElement).not.toBe(null);
    expect(gridElement).not.toBe(undefined);
  });
});
