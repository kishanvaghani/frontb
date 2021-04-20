import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperityCardComponent } from './properity-card.component';

describe('ProperityCardComponent', () => {
  let component: ProperityCardComponent;
  let fixture: ComponentFixture<ProperityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
