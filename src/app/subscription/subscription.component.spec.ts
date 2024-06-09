import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SubscriptionComponent } from './subscription.component';
describe('SubscriptionComponent', () => {
  let component: SubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionComponent);
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
