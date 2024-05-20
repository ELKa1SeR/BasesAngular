/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {ListComponentDBZ } from './list-component.component';

describe('ListComponentDBZ', () => {
  let component: ListComponentDBZ;
  let fixture: ComponentFixture<ListComponentDBZ>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponentDBZ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentDBZ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
