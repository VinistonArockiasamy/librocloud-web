import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootLayoutComponent } from './root-layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

describe('RootLayoutComponent', () => {
  let component: RootLayoutComponent;
  let fixture: ComponentFixture<RootLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootLayoutComponent],
      imports: [RouterTestingModule, MatMenuModule, MatButtonModule, NoopAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have footer element', () => {
    const footerElement = fixture.nativeElement.querySelector('footer');
    const footerComponentElement = footerElement.querySelector('app-footer');
    expect(footerComponentElement).not.toBe(null);
    expect(footerComponentElement).not.toBe(undefined);
  });

  it('should have header element', () => {
    const headerElement = fixture.nativeElement.querySelector('header');
    const headerComponentElement = headerElement.querySelector('app-header');
    expect(headerComponentElement).not.toBe(null);
    expect(headerComponentElement).not.toBe(undefined);
  });

  it('should have main element', async () => {
    const menuElement = fixture.nativeElement.querySelector('main');
    const routerOutletElement = menuElement.querySelector('router-outlet');
    expect(routerOutletElement).not.toBe(null);
    expect(routerOutletElement).not.toBe(undefined);
  });

  it('should contain a spinner', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const divSpinnerElement = fixture.nativeElement.querySelector(
      'div.e-loading-spinner'
    );
    expect(divSpinnerElement).not.toBe(null);
    expect(divSpinnerElement).not.toBe(undefined);
  });
});
