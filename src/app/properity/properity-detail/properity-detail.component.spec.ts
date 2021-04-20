import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperityDetailComponent } from './properity-detail.component';

describe('ProperityDetailComponent', () => {
  let component: ProperityDetailComponent;
  let fixture: ComponentFixture<ProperityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
