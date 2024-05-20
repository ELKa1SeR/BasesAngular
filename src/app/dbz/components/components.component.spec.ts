import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dbzComponent } from './components.component';

describe('dbzComponent', () => {
  let component: dbzComponent;
  let fixture: ComponentFixture<dbzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dbzComponent]
    });
    fixture = TestBed.createComponent(dbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
